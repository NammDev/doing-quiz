import styles from './Login.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { Logo } from '~/assets/svg'
import Auth from './Auth'
import ButtonComponent from '~/components/Button'
import config from '~/config'

const cx = classNames.bind(styles)

function Login() {
  return (
    <div className={cx('login')}>
      <div className={cx('login-top')}>
        <span className={cx('spanLink')}>Don't have an account yet?</span>
        <ButtonComponent to={config.routes.register} className={cx('small-btn')}>
          Sign up
        </ButtonComponent>
        <ButtonComponent to={config.routes.profile} underline className={cx('help-btn')}>
          Need help?
        </ButtonComponent>
      </div>
      <div className={cx('login-content')}>
        <div className={cx('login-brand')}>
          <Link className={cx('logo')} to={config.routes.home}>
            <Logo />
          </Link>
        </div>
        <Auth />
      </div>
    </div>
  )
}

export default Login
