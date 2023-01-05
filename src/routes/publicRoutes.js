import { Home, Login, Register, NotFound } from '~/pages'
import config from '~/config'
import { HeaderLayout, FragmentLayout } from '~/layouts'

// Don't Need Login
const publicRoutes = [
  { path: config.routes.home, component: Home, layout: HeaderLayout },
  { path: config.routes.login, component: Login, layout: FragmentLayout },
  { path: config.routes.register, component: Register, layout: FragmentLayout },
  { path: config.routes.notFound, component: NotFound, layout: HeaderLayout },
]

export default publicRoutes
