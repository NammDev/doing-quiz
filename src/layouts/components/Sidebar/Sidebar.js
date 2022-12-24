import styles from './Sidebar.module.scss'
import classnames from 'classnames/bind'
import { Logo } from '~/assets/svg'
import { Link } from 'react-router-dom'

const cx = classnames.bind(styles)

function Sidebar() {
  return (
    <aside className={cx('sidebar')}>
      <div className={cx('sidebar-logo')}>
        <Link className={cx('logo')} to='/'>
          <Logo />
        </Link>
      </div>
      <ul className={cx('menu-inner')}>
        <li className={cx('menu-item', 'active')}>
          <a className={cx('menu-link')}>
            <div>Dashboard</div>
          </a>
        </li>
        <li className={cx('menu-item')}>
          <a className={cx('menu-link')}>
            <div>Layouts</div>
          </a>

          <ul className={cx('menu-sub')}>
            <li className={cx('menu-item')}>
              <a className={cx('menu-link')}>
                <div>Without menu</div>
              </a>
            </li>
            <li className={cx('menu-item')}>
              <a className={cx('menu-link')}>
                <div>Without navbar</div>
              </a>
            </li>
            <li className={cx('menu-item')}>
              <a className={cx('menu-link')}>
                <div>Container</div>
              </a>
            </li>
            <li className={cx('menu-item')}>
              <a className={cx('menu-link')}>
                <div>Fluid</div>
              </a>
            </li>
            <li className={cx('menu-item')}>
              <a className={cx('menu-link')}>
                <div>Blank</div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
