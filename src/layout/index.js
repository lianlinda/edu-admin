import React, { Component } from 'react';
import { Layout } from 'antd';

import Menu from './menu'
import NavBar from './navBar'
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

  Logout = () => {
    this.props.history.push('/login')
  }

  render() {
    const { collapsed } = this.state
    return (
      <Layout className="app-con">
        <Sider trigger={null} collapsible collapsed={ collapsed }>
          <div className="logo">
            <img src={require('../imgs/logo.png')} className="logo-img" alt="教育" />
            { collapsed ? null : <span className="ml10">教育</span> }
          </div>
          <Menu/>
        </Sider>
        <Layout>
          <Header className="app-header">
            <NavBar collapsed={ collapsed } toggle={ this.toggle } logout={ this.Logout }/>
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