import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './index.less'

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login-con">
          <div className="login-left">
            <h1 className="title">
              <img src={require('../../imgs/logo-white.png')}></img>
              管理后台
            </h1>
            <img src={require('../../imgs/login-left.png')}></img>
          </div>
          <div className="login-form">
            <Form>
              <Form.Item
                  label=""
                  name="username"
                >
                管理系统
              </Form.Item>
              <Form.Item
                label=""
                name="username"
                rules={[{ required: true, message: '请输入姓名' }]}
              >
                <Input prefix={<UserOutlined />}/>
              </Form.Item>
              <Form.Item
                label=""
                name="passord"
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input.Password prefix={<LockOutlined />} />
              </Form.Item>
              <Form.Item>
                <Button type="link">注册</Button>
                忘记密码?
              </Form.Item>
              <Form.Item>
                <Checkbox>记住密码</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type="primary" className="w-100">登录</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login