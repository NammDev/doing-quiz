import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { Logo } from '~/assets/svg'
import Button from '~/components/Button'
import config from '~/config'
import { useSelector } from 'react-redux'

const cx = classNames.bind(styles)

function Header() {
  const user = useSelector((state) => state.user)
  const { isAuthenticated, account } = user

  return (
    <div className={cx('header')}>
      <div className={cx('navbar')} expand='lg'>
        <div className={cx('navbar-logo')}>
          <Link className={cx('logo')} to='/'>
            <Logo />
          </Link>
        </div>
        <div className={cx('navbar-list')}>
          <Link className={cx('navbar-element')} to={config.routes.home}>
            Home
          </Link>
          <Link className={cx('navbar-element')} to={config.routes.profile}>
            Users
          </Link>
          <Link className={cx('navbar-element')} to={config.routes.admin}>
            Admin
          </Link>
        </div>
        <div className={cx('navbar-actions')}>
          {isAuthenticated ? (
            <>
              <Button to={config.routes.profile} outline>
                {account.username}
              </Button>
              <Button to={config.routes.register} primary>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button to={config.routes.login} outline>
                Log in
              </Button>
              <Button to={config.routes.register} primary>
                Sign up
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
