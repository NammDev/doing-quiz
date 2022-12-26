import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './Admin.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Admin() {
  return (
    <div className={cx('admin')}>
      <h1>Admin</h1>
      <div className='manage'>
        <Outlet />
      </div>
      <ToastContainer autoClose={2500} />
    </div>
  )
}

export default Admin
