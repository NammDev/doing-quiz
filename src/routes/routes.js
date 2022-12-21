import { Home, Profile } from '~/pages'
import config from '~/config'

// Don't Need Login
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.profile, component: Profile },
]

// Need Login
const privateRoutes = []

export { publicRoutes, privateRoutes }
