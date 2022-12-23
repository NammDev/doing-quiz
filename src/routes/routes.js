import { Home, Profile, Admin } from '~/pages'
import config from '~/config'
import { HeaderLayout, FragmentLayout, SidebarLayout } from '~/layouts'

// Don't Need Login
const publicRoutes = [
  { path: config.routes.home, component: Home, layout: HeaderLayout },
  { path: config.routes.profile, component: Profile, layout: FragmentLayout },
  { path: config.routes.admin, component: Admin, layout: SidebarLayout },
]

// Need Login
const privateRoutes = []

export { publicRoutes, privateRoutes }
