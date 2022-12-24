import { Sidebar } from '../components'
import styles from './SidebarLayout.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

function SidebarLayout({ children }) {
  return (
    <div className={cx('sidebar-layout')}>
      <Sidebar />
      <div className={cx('main')}>{children}</div>
    </div>
  )
}

export default SidebarLayout
