import Main from '@/pages/Main'
import About from '@/pages/About'
// 咱不开启多级路由
type routerType = {
  isIndex?: boolean;
  Component: () => JSX.Element;
  path?: string;
  children?: routerType[]
}
const routers: routerType[] = [
  {
    isIndex: true,
    path: '/',
    Component: Main
  },
  {
    path: '/about',
    Component: About
  }
]

export default routers