import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Login from './views/login'
import Main from './views/main'

import './mock'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={ Login }/>
          <Route path="/main" component={ Main }/>
          <Redirect from="/" to="/login" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;