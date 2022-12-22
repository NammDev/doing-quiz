import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { Logo } from '~/assets/svg'

const cx = classNames.bind(styles)

function Header() {
  return (
    <div className={cx('header')}>
      <div className={cx('navbar')} expand='lg'>
        <div className={cx('navbar-logo')}>
          <Link className={cx('logo')} to='/'>
            <Logo />
          </Link>
        </div>
        <div className={cx('navbar-list')}>
          <Link className={cx('navbar-element')} to='/'>
            Home
          </Link>
          <Link className={cx('navbar-element')} to='/profile'>
            Users
          </Link>
          <Link className={cx('navbar-element')} to='/admin'>
            Admin
          </Link>
        </div>
        <div>
          <Link className='nav-link' to='/admin'>
            Log in
          </Link>
          <Link className='nav-link' to='/admin'>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
