import styles from './Home.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Home() {
  return (
    <div className={cx('home')}>
      <h1>Say Hi</h1>
    </div>
  )
}

export default Home
