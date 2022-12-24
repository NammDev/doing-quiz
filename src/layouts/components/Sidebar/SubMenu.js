import styles from './Sidebar.module.scss'
import classnames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const cx = classnames.bind(styles)

function SubMenu({ item, index }) {
  const [subMenu, setSubMenu] = useState(false)

  const showSubMenu = () => setSubMenu(!subMenu)
  return (
    <>
      <Link
        to={item.path}
        className={cx('menu-item', index === 2 && 'active')}
        onClick={item.subMenu && showSubMenu}
      >
        <div className={cx('menu-link')}>
          {item.icon}
          <div className={cx('menu-link-title')}>{item.title}</div>
          <div className={cx('menu-dropdown-icon')}>
            {item.subMenu && subMenu ? item.iconOpened : item.subMenu ? item.iconClosed : null}
          </div>
        </div>
      </Link>
      {subMenu && (
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
    </>
  )
}

export default SubMenu
