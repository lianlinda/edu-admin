import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Layout from '../../layout'

import Home from './home'
import ClassOverview from './class/overview'

class Main extends Component {
  render() {
    return (
      <Layout>
        <Route path='/main/classOverview' component={ ClassOverview }/>
        <Route path='/main' exact component={ Home }/>
      </Layout>
    )
  }
}

export default Main