import { Home, Profile, Admin, Login, Register, Quiz, NotFound } from '~/pages'
import config from '~/config'
import { HeaderLayout, FragmentLayout, SidebarLayout } from '~/layouts'

// Don't Need Login
const publicRoutes = [
  { path: config.routes.home, component: Home, layout: HeaderLayout },
  { path: config.routes.profile, component: Profile, layout: HeaderLayout },
  { path: config.routes.admin, component: Admin, layout: SidebarLayout },
  { path: config.routes.login, component: Login, layout: FragmentLayout },
  { path: config.routes.register, component: Register, layout: FragmentLayout },
  { path: config.routes.quiz, component: Quiz, layout: FragmentLayout },
  { path: config.routes.notFound, component: NotFound, layout: HeaderLayout },
]

// Need Login
const privateRoutes = []

export { publicRoutes, privateRoutes }
