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
    title: 'Dashboard',
    path: '/admin',
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: 'Features',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowRightSLine className='svg-transition' />,
    iconOpened: <RiIcons.RiArrowRightSLine className='svg-rotate svg-transition' />,
    subMenu: [
      {
        path: '/admin/manage-user',
        title: 'Quản lý Users',
      },
      {
        path: '/admin/manage-quiz',
        title: 'Quản lý Bài Quiz',
      },
      {
        path: '/admin/manage-question',
        title: 'Quản lý Câu Hỏi',
      },
    ],
  },
]
