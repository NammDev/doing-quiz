import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

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
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subMenu: [
      {
        code: 'en',
        title: 'English',
      },
      {
        code: 'vi',
        title: 'Tiếng Việt',
      },
      {
        code: 'it',
        title: 'Italiano',
      },
      {
        code: 'po',
        title: 'Polski (Polska)',
      },
      {
        code: 'po',
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
