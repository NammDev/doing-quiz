import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import styles from './Sidebar.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

export const SidebarData = [
  {
    title: 'Admin',
    path: '/admin',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: 'Setting',
    path: '/setting',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowRightSLine className='svg-transition' />,
    iconOpened: <RiIcons.RiArrowRightSLine className='svg-rotate svg-transition' />,
    subMenu: [
      {
        path: '/language/english',
        title: 'English',
      },
      {
        path: '/language/viet',
        title: 'Tiếng Việt',
      },
      {
        path: '/language/italia',
        title: 'Italiano',
      },
      {
        path: '/language/polska',
        title: 'Polski (Polska)',
      },
      {
        path: '/language/svergie',
        title: 'Svenska (Sverige)',
      },
    ],
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
  },
]
