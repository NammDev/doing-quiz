import styles from './Login.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { Logo } from '~/assets/svg'
import Auth from './Auth'
import ButtonComponent from '~/components/Button'

const cx = classNames.bind(styles)

function Login() {
  return (
    <div className={cx('login')}>
      <div className={cx('login-top')}>
        <span className={cx('spanLink')}>Don't have an account yet?</span>
        <ButtonComponent>Sign up</ButtonComponent>
        <ButtonComponent>Need help?</ButtonComponent>
      </div>
      <div className={cx('login-content')}>
        <div className={cx('login-brand')}>
          <Link className={cx('logo')} to='/'>
            <Logo />
          </Link>
        </div>
        <div className={cx('login-container')}>
          <Auth />
        </div>
      </div>
    </div>
  )
}

export default Login
