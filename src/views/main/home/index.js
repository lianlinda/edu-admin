import React, { Component } from 'react'
import { Row, Col, Card, Button, DatePicker, Progress } from 'antd'
import {
  MoreOutlined
} from '@ant-design/icons';
import EduIcon from '../../../utils/icon'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/legend'
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/title';
// import 'echarts/lib/component/toolbox';
// import 'echarts/lib/component/markPoint';
// import 'echarts/lib/component/markLine';

import './index.less'

class Home extends Component {
  state = {
    // 折线图配置参数
    lineOption: {
      color: ['#2bc17b', '#fbad4a'],
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLine: {
          show: false,
          lineStyle: {
            color: '#828282'
          }
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        axisLine: {
          show: false,
          lineStyle: {
            color: '#828282'
          }
        },
        type: 'value',
        axisTick: {
          show: false
        }
      },
      series: [{
        name: '成交量',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }, {
        name: '访客量',
        data: [820, 932, 500, 654, 1290, 1330, 122],
        type: 'line',
        smooth: true
      }]
    },
    // 今日付款额配置参数
    paymentOption: {
      color: ['#2bc17b'],
      xAxis: {
        type: 'category',
        data: ['0:00', '3:00', '6:00', '9:00', '12:00', '15:00', '18:00', '21:00', '24:00'],
        axisLine: {
          show: false,
          lineStyle: {
            color: '#828282'
          }
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        axisLine: {
          lineStyle: {
            color: '#828282'
          }
        },
        type: 'value',
        axisTick: {
          show: false
        }
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'bar'
      }]
    },
    // 课程播放比配置参数 
    videoOption: {
      color: ['#2bc17b', '#fbad4a', '#49b5ff', '#ca64cf', '#ff7062'],
      legend: {
        left: 'center',
        top: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5']
      },
      series: [{
        name: '半径模式',
        type: 'pie',
        radius: [20, 110],
        center: ['40%', '50%'],
        roseType: 'radius',
        label: {
          show: false
        },
        emphasis: {
          label: {
              show: true
          }
        },
        data: [
          {value: 10, name: 'rose1'},
          {value: 5, name: 'rose2'},
          {value: 15, name: 'rose3'},
          {value: 25, name: 'rose4'},
          {value: 20, name: 'rose5'}
        ]
      }]
    }
  }

  componentDidMount() {
    this.drawLine()
    this.drawPayment()
    this.drawVideo()
  }

  // 折线图
  drawLine = () => {
    const { lineOption } = this.state
    const lineChart = echarts.init(document.getElementById('line'))
    // 绘制图表
    lineChart.setOption(lineOption)
  }

  // 今日付款金额柱状图
  drawPayment = () => {
    const { paymentOption } = this.state
    const paymentChart = echarts.init(document.getElementById('payment'))
    // 绘制图表
    paymentChart.setOption(paymentOption)
  }

  // 课程播放占比圆环图
  drawVideo = () => {
    const { videoOption } = this.state
    const videoChart = echarts.init(document.getElementById('video'))
    // 绘制图表
    videoChart.setOption(videoOption)
  }

  render() {
    const lineTitle = (
      <div>
        最近7日
        成交量
        访客量
        <span className="fr">
          今日状况
          最近15天
          最近30天
        </span>
      </div>
    )

    const paymentTitle = (
      <div>
        今日付款金额
        日期：<DatePicker />
      </div>
    )

    return (
      <div className="p-home">
        <p>
          <span className="home-title">平台信息数据统计</span>
          <span className="fr">
            <Button type="primary" shape="round" className="w80">日</Button>
            <Button shape="round" className="w80 mr10">月</Button>
            <Button shape="round" className="w80">年</Button>
          </span>
        </p>
        <Row gutter={16} className="home-over mb16">
          <Col span={6}>
            <Card className='sale'>
              <EduIcon type='icon-qiandai' className="icon" />
              销售额
              ¥
              同昨天对比
            </Card>
          </Col>
          <Col span={6}>
            <Card className="user">
              <EduIcon type='icon-yonghu' className="icon" />
              新用户
              同昨天对比
            </Card>
          </Col>
          <Col span={6}>
            <Card className="order">
              <EduIcon type='icon-dingdan1' className="icon" />
              课程订单量
              同昨天对比
            </Card>
          </Col>
          <Col span={6}>
            <Card className="video">
              <EduIcon type='icon-shipin1' className="icon" />
              视频播放量
              同昨天对比
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={15}>
            <Row className="mb16">
              <Col span={24}>
                <Card title={lineTitle}>
                  <div id="line" className="line-charts" />
                </Card>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Card title="活跃用户" extra={<a href="/main"><MoreOutlined /></a>}>
                  <Progress percent={95} strokeColor={{
                    '0%': '#9066f3',
                    '100%': '#81e3fd',
                    }}/>
                </Card>
              </Col>
              <Col span={12}>
                <Card title="课程播放占比" extra={<a href="/main"><MoreOutlined /></a>}>
                  <div id="video" className="video-chart" />
                </Card>
              </Col>
            </Row>
          </Col>
          <Col span={9}>
            <Row className="mb16">
              <Col span={24}>
                <Card title={paymentTitle}>
                  <div id="payment" className="payment-charts" />
                </Card>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Card title="月热门课程排行榜" extra={<a href="/main"><MoreOutlined /></a>}>
                  
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