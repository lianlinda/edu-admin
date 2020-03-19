import React, { Component } from 'react'
import { Badge, Modal, Breadcrumb, Menu, Dropdown } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  PoweroffOutlined,
  ExclamationCircleOutlined,
  DownOutlined,
} from '@ant-design/icons';

const { confirm } = Modal

class NavBar extends Component {
  handleLogout = () => {
    let that = this
    confirm({
      title: '',
      icon: <ExclamationCircleOutlined />,
      content: '是否确认退出系统？',
      okText: '确认',
      cancelText: '取消',
      onOk() {
        that.props.logout()
      },
      conCancel() {}
    })
  }

  render() {
    const { collapsed, toggle } = this.props
    const menu = (
      <Menu>
        <Menu.Item>个人信息</Menu.Item>
      </Menu>
    )

    return (
      <div>
        <span className="in-flex ai-c">
          { collapsed ? <MenuUnfoldOutlined onClick={ toggle } /> : <MenuFoldOutlined onClick={ toggle } />}
          <Breadcrumb className="ml10">
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/main">Application Center</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </span>
        <div className="fr">
          <span className="mr30">
            <QuestionCircleOutlined className="mr10"/>
            <Badge>
              <BellOutlined />
            </Badge>
          </span>
          <Dropdown overlay={menu} className="mr10">
            <span>管理员：xxxx <DownOutlined /></span>
          </Dropdown>
          <span className="log-out" onClick={ this.handleLogout }>
            <PoweroffOutlined className="mr5"/>退出
          </span>
        </div>
      </div>
    )
  }
}

export default NavBar