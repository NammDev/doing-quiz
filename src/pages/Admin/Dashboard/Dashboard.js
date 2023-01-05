import classNames from 'classnames/bind'
import styles from './Dashboard.module.scss'
import { getOverview } from '~/services/auth'
import { useEffect } from 'react'

const cx = classNames.bind(styles)

function Dashboard() {
  const fetchApi = async () => {
    const res = await getOverview()
    if (res && res.EC === 0) {
      console.log(res.DT)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className={cx('dashboard')}>
      <h1>Dashboassrd</h1>
    </div>
  )
}

export default Dashboard
