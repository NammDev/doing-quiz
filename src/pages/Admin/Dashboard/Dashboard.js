import classNames from 'classnames/bind'
import styles from './Dashboard.module.scss'

const cx = classNames.bind(styles)

function Dashboard() {
  return (
    <div className={cx('dashboard')}>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
