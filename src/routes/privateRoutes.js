import { Profile, Admin, Quiz } from '~/pages'
import config from '~/config'
import { HeaderLayout, FragmentLayout, SidebarLayout } from '~/layouts'

const privateRoutes = [
  { path: config.routes.profile, component: Profile, layout: HeaderLayout },
  { path: config.routes.admin, component: Admin, layout: SidebarLayout },
  { path: config.routes.quiz, component: Quiz, layout: FragmentLayout },
]

export default privateRoutes
