// TODO 可以补action data ts // 
export type InitState = {
  loading: boolean;
  color: string;
}
export const initState: InitState = { loading: false, color: '#000000' }
type ActionType = keyof InitState
export type Action = { type: ActionType; data: (val: InitState) => any | any }

const formatAction = (action: Action, pre: InitState): any => {
  if (typeof action.data === 'function') {
    return action.data(pre)
  }
  return action.data
}

const reduce = (action: Action, state: InitState): InitState => {
  const data = formatAction(action, state)
  if (action.type === 'color'){
    return {
      ...state,
      color: data
    }
  }
  if (action.type === 'loading'){
    return {
      ...state,
      loading: data
    }
  }
  return state
}

export default reduce
