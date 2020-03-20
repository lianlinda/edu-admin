import React, { Component } from 'react'
import { Row, Col, Card, Button } from 'antd'
import './index.less'

import EduIcon from '../../../utils/icon'

class Home extends Component {
  render() {
    return (
      <div className="p-home">
        <p>
          平台信息数据统计
          <div className="fr">
            <Button type="primary" shape="round">日</Button>
            <Button shape="round">月</Button>
            <Button shape="round">年</Button>
          </div>
        </p>
        <Row gutter={16} className="home-over mb16">
          <Col span={6}>
            <Card className='sale'>
              <EduIcon type='icon-qiandai' />
              销售额
              {/* <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p> */}
            </Card>
          </Col>
          <Col span={6}>
            <Card className="user">
              <EduIcon type='icon-yonghu' />
              新用户
            </Card>
          </Col>
          <Col span={6}>
            <Card className="order">
              <EduIcon type='icon-dingdan1' />
              课程订单量
            </Card>
          </Col>
          <Col span={6}>
            <Card className="video">
              <EduIcon type='icon-shipin1' />
              视频播放量
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={15}>
            <Row className="mb16">
              <Col span={24}>
                <Card>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Card>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Col>
              <Col span={12}>
                <Card>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col span={9}>
            <Row className="mb16">
              <Col span={24}>
                <Card>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Card>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home