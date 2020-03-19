import React from 'react'
import { Route } from 'react-router-dom'
import Layout from '../../layout'

import Home from './home'
import ClassOverview from './class/overview'

// 函数定义的组件
const Main = (props) => (
  <Layout {...props}>
    <Route path='/main/classOverview' component={ ClassOverview }/>
    <Route path='/main' exact component={ Home }/>
  </Layout>
)

// class Main extends Component {
//   render() {
//     return (
//       <Layout>
//         <Route path='/main/classOverview' component={ ClassOverview }/>
//         <Route path='/main' exact component={ Home }/>
//       </Layout>
//     )
//   }
// }

export default Main