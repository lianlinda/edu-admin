import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'

import './index.less'

class Home extends Component {
  render() {
    return (
      <div className="p-class">
        <p>
          <span className="home-title">订单管理</span>
        </p>
        <Row gutter={16} className="mb16">
          <Col span={4.8}>
            <Card>收到总订单（笔）</Card>
          </Col>
          <Col span={4.8}>
            <Card>待付款订单（笔）</Card>
          </Col>
          <Col span={4.8}>
            <Card>已付款订单（笔）</Card>
          </Col>
          <Col span={4.8}>
            <Card>未发货订单（笔）</Card>
          </Col>
          <Col span={4.8}>
            <Card>退款订单（笔）</Card>
          </Col>
        </Row>
        <Row gutter={16} className="mb16">
          <Col span={16}>
            <Card>2019年销售</Card>
          </Col>
          <Col span={8}>
            <Card>课程播放统计</Card>
          </Col>
        </Row>
        <Row>
          查询
        </Row>
      </div>
    )
  }
}

export default Home