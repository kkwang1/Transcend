import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome style={{backgroundColor:"#000000"}}/>,
    iconClosed: <RiIcons.RiArrowDownSFill style={{backgroundColor:"#000000"}}/>,
    iconOpened: <RiIcons.RiArrowUpSFill style={{backgroundColor:"#000000"}}/>,

    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper style={{backgroundColor:"#000000"}}/>
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper style={{backgroundColor:"#000000"}}/>
      }
    ]
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper style={{backgroundColor:"#000000"}}/>,
    iconClosed: <RiIcons.RiArrowDownSFill style={{backgroundColor:"#000000"}}/>,
    iconOpened: <RiIcons.RiArrowUpSFill style={{backgroundColor:"#000000"}}/>,

    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper style={{backgroundColor:"#000000"}}/>,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper style={{backgroundColor:"#000000"}}/>,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper style={{backgroundColor:"#000000"}}/>
      }
    ]
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus style={{backgroundColor:"#000000"}}/>
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople style={{backgroundColor:"#000000"}}/>
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText style={{backgroundColor:"#000000"}}/>,

    iconClosed: <RiIcons.RiArrowDownSFill style={{backgroundColor:"#000000"}}/>,
    iconOpened: <RiIcons.RiArrowUpSFill style={{backgroundColor:"#000000"}}/>,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper style={{backgroundColor:"#000000"}}/>
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper style={{backgroundColor:"#000000"}}/>
      }
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle style={{backgroundColor:"#000000"}}/>
  }
];