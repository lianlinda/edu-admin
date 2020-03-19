import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'

class Home extends Component {
  render() {
    return (
      <div>
        <p>平台信息数据统计</p>
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={15}>
            <Card>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={9}>
          <Card>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home