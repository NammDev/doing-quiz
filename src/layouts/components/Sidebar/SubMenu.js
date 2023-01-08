import styles from './Sidebar.module.scss'
import classnames from 'classnames/bind'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const cx = classnames.bind(styles)

function SubMenu({ item }) {
  const [subMenu, setSubMenu] = useState(false)

  const showSubMenu = () => setSubMenu(!subMenu)

  return (
    <div className='submenu'>
      <NavLink
        to={item.path}
        className={cx('menu-item', item.subMenu && 'disabled-active')}
        onClick={item.subMenu && showSubMenu}
      >
        <div className={cx('menu-link')}>
          {item.icon}
          <div className={cx('menu-link-title')}>{item.title}</div>
          <div className={cx('menu-dropdown-icon')}>
            {item.subMenu && subMenu ? item.iconOpened : item.subMenu ? item.iconClosed : null}
          </div>
        </div>
      </NavLink>
      {subMenu && (
        <ul className={cx('menu-sub')}>
          {item.subMenu.map((child, i) => (
            <NavLink to={child.path} key={i} className={cx('menu-item')}>
              <div className={cx('menu-link')}>
                <div>{child.title}</div>
              </div>
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SubMenu
