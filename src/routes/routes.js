import { Home, Profile, Admin, Dashboard, ManageQuestion, ManageQuiz, ManageUser } from '~/pages'
import config from '~/config'
import { HeaderLayout, FragmentLayout, SidebarLayout } from '~/layouts'

// Don't Need Login
const publicRoutes = [
  { path: config.routes.home, component: Home, layout: HeaderLayout },
  { path: config.routes.profile, component: Profile, layout: FragmentLayout },
  { path: config.routes.admin, component: Admin, layout: SidebarLayout },
  { path: config.routes.dashboard, component: Dashboard, layout: SidebarLayout },
  { path: config.routes.manageQuestion, component: ManageQuestion, layout: SidebarLayout },
  { path: config.routes.manageQuiz, component: ManageQuiz, layout: SidebarLayout },
  { path: config.routes.manageUser, component: ManageUser, layout: SidebarLayout },
]

// Need Login
const privateRoutes = []

export { publicRoutes, privateRoutes }
