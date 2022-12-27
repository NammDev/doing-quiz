import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { Logo } from '~/assets/svg'
import Button from '~/components/Button'
import { useEffect, useState } from 'react'
import config from '~/config'

const cx = classNames.bind(styles)

function Header() {
  const [headerBackground, setHeaderBackground] = useState('')

  const handleScroll = () => {
    if (window.scrollY > 88) {
      return setHeaderBackground('header-bg-white')
    } else {
      return setHeaderBackground('')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={cx('header', headerBackground)}>
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
          <Button to={config.routes.login} outline>
            Log in
          </Button>
          <Button to={config.routes.login} primary>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header
