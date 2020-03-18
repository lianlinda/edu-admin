import React, { Component } from 'react';
import { Layout, Badge } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  PoweroffOutlined
} from '@ant-design/icons';

import Menu from './menu'
import './index.less'

const { Header, Sider, Content } = Layout;

class AppLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className="app-con">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            <img src={require('../imgs/logo.png')} className="logo-img"/>
            教育
          </div>
          <Menu/>
        </Sider>
        <Layout>
          <Header className="app-header">
            { this.state.collapsed ? <MenuUnfoldOutlined onClick={this.toggle} /> : <MenuFoldOutlined onClick={this.toggle} />}
            <div className="fr">
              <QuestionCircleOutlined />
              <Badge>
                <BellOutlined />
              </Badge>
              管理员：xxxx
              <PoweroffOutlined />退出
            </div>
          </Header>
          <Content className="app-content">
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default AppLayout