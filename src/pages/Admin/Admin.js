import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import styles from './Admin.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Admin() {
  return (
    <div className={cx('admin')}>
      <Outlet />
    </div>
  )
}

export default Admin
