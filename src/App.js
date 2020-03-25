import React, { Component } from 'react'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import 'moment/locale/zh-cn'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';

import Login from './views/login'
import Main from './views/main'

import './mock'

class App extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={ Login }/>
            <Route path="/main" component={ Main }/>
            <Redirect from="/" to="/login" />
          </Switch>
        </BrowserRouter>
      </ConfigProvider>
    )
  }
}

export default App;