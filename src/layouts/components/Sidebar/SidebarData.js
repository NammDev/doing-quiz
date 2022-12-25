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
    title: 'Features',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowRightSLine className='svg-transition' />,
    iconOpened: <RiIcons.RiArrowRightSLine className='svg-rotate svg-transition' />,
    subMenu: [
      {
        path: '/manageUser',
        title: 'Quản lý Users',
      },
      {
        path: '/manageQuiz',
        title: 'Quản lý Bài Quiz',
      },
      {
        path: '/manageQuestion',
        title: 'Quản lý Câu Hỏi',
      },
    ],
  },
]
