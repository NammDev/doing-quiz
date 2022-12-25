import { ManageQuestion, ManageQuiz, ManageUser } from '~/pages'
import config from '~/config'

// Don't Need Login
const adminRoutes = [
  { path: config.routes.manageQuestion, component: ManageQuestion },
  { path: config.routes.manageQuiz, component: ManageQuiz },
  { path: config.routes.manageUser, component: ManageUser },
]

export default adminRoutes
