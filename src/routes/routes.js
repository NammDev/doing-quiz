import { Home, Profile, Admin, Login, Register } from '~/pages'
import config from '~/config'
import { HeaderLayout, FragmentLayout, SidebarLayout } from '~/layouts'

// Don't Need Login
const publicRoutes = [
  { path: config.routes.home, component: Home, layout: HeaderLayout },
  { path: config.routes.profile, component: Profile, layout: HeaderLayout },
  { path: config.routes.admin, component: Admin, layout: SidebarLayout },
  { path: config.routes.login, component: Login, layout: FragmentLayout },
  { path: config.routes.register, component: Register, layout: FragmentLayout },
]

// Need Login
const privateRoutes = []

export { publicRoutes, privateRoutes }
