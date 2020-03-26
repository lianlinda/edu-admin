import React, { Component } from 'react'
import { Row, Col, Card, DatePicker } from 'antd'
import EduIcon from '@/utils/icon'

import './index.less'

class Home extends Component {
  render() {
    return (
      <div className="p-class">
        <p>
          <span className="home-title">课程数据统计</span>
          <span className="fr">
            日期：<DatePicker className="round-date"/>
          </span>
        </p>
        <Row gutter={16} className="mb16">
          <Col span={8}>
            <Card>
              <EduIcon type='icon-qiandai' className="icon" />
              教师总签约人数
            </Card>
          </Col>
          <Col span={8}>
            <Card>学生总人数</Card>
          </Col>
          <Col span={8}>
            <Card>直播大V人数</Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={16}>
            <Card>今日课程概况</Card>
          </Col>
          <Col span={8}>
            <Card className="mb16">课程播放统计</Card>
            <Card>课程播放统计</Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home