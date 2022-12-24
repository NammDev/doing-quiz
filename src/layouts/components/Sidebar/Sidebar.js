import styles from './Sidebar.module.scss'
import classnames from 'classnames/bind'
import { Logo } from '~/assets/svg'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import { useState } from 'react'
import SubMenu from './SubMenu'

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
        {SidebarData.map((item, i) => (
          <SubMenu item={item} index={i} key={i} />
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
