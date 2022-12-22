import { Home, Profile, Admin } from '~/pages'
import config from '~/config'

// Don't Need Login
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.admin, component: Admin },
]

// Need Login
const privateRoutes = []

export { publicRoutes, privateRoutes }
