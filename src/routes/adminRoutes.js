import { ManageQuestion, ManageQuiz, ManageUser, Dashboard } from '~/pages'
import config from '~/config'

// Don't Need Login
const adminRoutes = [
  { path: config.routes.manageQuestion, component: ManageQuestion },
  { path: config.routes.manageQuiz, component: ManageQuiz },
  { path: config.routes.manageUser, component: ManageUser },
  { path: config.routes.dashboard, component: Dashboard },
  { path: config.routes.admin, component: Dashboard },
]

export default adminRoutes
