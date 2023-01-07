import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { Logo } from '~/assets/svg'
import Button from '~/components/Button'
import config from '~/config'
import { useSelector } from 'react-redux'
import { postLogout } from '~/services/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { doLogout } from '~/redux/actions/userAction'
import { useDispatch } from 'react-redux'
import UserDropdown from './UserDropdown/UserDropdown'

const cx = classNames.bind(styles)

function Header() {
  const user = useSelector((state) => state.user)
  const { isAuthenticated, account } = user
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = async () => {
    const res = await postLogout(account.email, account.refresh_token)
    if (res && res.EC === 0) {
      dispatch(doLogout())
      navigate('/login')
    } else {
      toast.error(res.EM)
    }
  }

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
            <UserDropdown onLogout={handleLogout} account={account} />
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
