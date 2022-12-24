import styles from './Sidebar.module.scss'
import classnames from 'classnames/bind'
import { Logo } from '~/assets/svg'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import { useState } from 'react'

const cx = classnames.bind(styles)

function Sidebar() {
  const [subMenu, setSubMenu] = useState(false)

  const showSubMenu = () => setSubMenu(!subMenu)
  return (
    <aside className={cx('sidebar')}>
      <div className={cx('sidebar-logo')}>
        <Link className={cx('logo')} to='/'>
          <Logo />
        </Link>
      </div>
      <ul className={cx('menu-inner')}>
        {SidebarData.map((item, i) => (
          <li key={i} className={cx('menu-item', i === 2 && 'active')}>
            <a className={cx('menu-link')}>
              {item.icon}
              <div className={cx('menu-link-title')}>{item.title}</div>
              <div className={cx('menu-dropdown-icon')} onClick={item.subMenu && showSubMenu}>
                {item.subMenu && subMenu ? item.iconOpened : item.subMenu ? item.iconClosed : null}
              </div>
            </a>
            {item.subMenu && subMenu && (
              <ul className={cx('menu-sub')}>
                {item.subMenu.map((child, i) => (
                  <li key={i} className={cx('menu-item')}>
                    <a className={cx('menu-link')}>
                      <div>{child.title}</div>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
