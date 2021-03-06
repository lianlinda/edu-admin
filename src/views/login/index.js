import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from './index.service'

import './index.less'

class Login extends Component {

  handleLogin = values => {
    login(values).then(res => {
      // console.log(res)
      this.props.history.push('/main')
    }).catch(() => {})
  }

  render() {
    return (
      <div className="login">
        <div className="login-con">
          <div className="login-left">
            <h1 className="title">
              <img src={require('../../imgs/logo-white.png')} alt="" />
              管理后台
            </h1>
            <img className="left-img" src={require('../../imgs/login-left.png')} alt="" />
          </div>
          <div className="login-form">
            <h3 className="form-title">管理系统</h3>
            <Form
              onFinish={this.handleLogin}
            >
              <Form.Item
                label=""
                name="username"
                rules={[{ required: true, message: '请输入姓名' }]}
              >
                <Input prefix={<UserOutlined />}/>
              </Form.Item>
              <Form.Item
                label=""
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input.Password prefix={<LockOutlined />} />
              </Form.Item>
              <div>
                <Button type="link">注册</Button>
                <span className="fr">忘记密码?</span>
              </div>
              <Form.Item>
                <Checkbox>记住密码</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-100">登录</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login