import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import { Logo } from '~/assets/svg'

const cx = classNames.bind(styles)

function Home() {
  return (
    <div>
      <Logo className={cx('wrapper')} />
    </div>
  )
}

export default Home
