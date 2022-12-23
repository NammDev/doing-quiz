import { SidebarData } from './SidebarData'
import './Sidebar.scss'

function Sidebar() {
  return (
    <nav className={'nav-menu active'}>
      <ul className='nav-menu-items'>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <div>
                {item.icon}
                <span>{item.title}</span>
                {item.icon}
              </div>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Sidebar
