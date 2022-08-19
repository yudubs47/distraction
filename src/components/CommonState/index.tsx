import React, { ReactNode, FC, useMemo, useState } from 'react'
import reduce, { InitState, Action, initState } from './reduce'

type UpdateState = (data: Action) => void
type InitStateArr = [InitState, UpdateState]

const initStateArr: InitStateArr = [initState, () => {}] // 需要补个初始化未完成记忆功能?

export const CommonContext = React.createContext<[InitState, UpdateState]>(initStateArr)

const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<InitState>(initStateArr[0])
  const value: InitStateArr = useMemo(() => {
    return [
      state,
      action => setState(pre => reduce(action, pre))
    ]
  }, [state])

  return (
    <CommonContext.Provider value={value}>
      {children}
    </CommonContext.Provider>
  )
}
export default Provider
