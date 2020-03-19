import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'antd';

import EduIcon from '../utils/icon'

const { SubMenu} = Menu

class AppMenu extends Component {
  state = {
    menu: [{
      id: '1',
      icon: 'icon-yibiaopan1',
      title: '首页',
      url: '/main',
      children: []
    }, {
      id: '2',
      icon: 'icon-kecheng',
      title: '课程管理',
      url: '',
      children: [{
        id: '3',
        icon: '',
        title: '课程总览',
        url: '/main/classOverview'
      }, {
        id: '6',
        icon: '',
        title: '已发布课程',
        url: '/main/class/publish'
      }]
    }, {
      id: '4',
      icon: 'icon-shipin',
      title: '视频管理',
      url: '',
      children: [{
        id: '5',
        icon: '',
        title: '全部视频',
        url: '/main/video'
      }]
    }]
  }

  render() {
    const { menu } = this.state
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {
          menu.map(ele => {
            if (ele.children.length) {
              return (
                <SubMenu
                  key={ ele.id }
                  title={
                    <span>
                      { ele.icon ? <EduIcon type={ ele.icon } /> : null }
                      <span>{ ele.title }</span>
                    </span>
                  }
                >
                  {
                    ele.children.map(child => {
                      return (
                        <Menu.Item key={ child.id }>
                          <Link to={ child.url }>
                            { child.icon ? <EduIcon type={ child.icon } /> : null }
                            <span>{ child.title }</span>
                          </Link>
                        </Menu.Item>
                      )
                    })
                  }
                </SubMenu>
              )
            } else {
              return (
                <Menu.Item key={ ele.id }>
                  <Link to={ ele.url }>
                    { ele.icon ? <EduIcon type={ ele.icon } /> : null }
                    <span>{ ele.title }</span>
                  </Link>
                </Menu.Item>
              )
            }
          })
        }
      </Menu>
    )
  }
}

export default AppMenu