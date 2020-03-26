import React, { Component } from 'react'
import { Row, Col, Card, Button, DatePicker, Progress } from 'antd'
import {
  MoreOutlined
} from '@ant-design/icons';
import EduIcon from '@/utils/icon'
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
      grid: {
        left: '5%',
        right: '5%'
      },
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
        type: 'bar',
        barMaxWidth: '10',
        itemStyle: {
          barBorderRadius: [10, 10, 0, 0]
        }
      }]
    },
    // 课程播放比配置参数 
    videoOption: {
      color: ['#2bc17b', '#fbad4a', '#49b5ff', '#ca64cf', '#ff7062'],
      legend: {
        orient: 'vertical',
        right: '15%',
        top: 'center',
        data: ['录播形式', '短视频', '直播形式', '公开课', '文字阅读']
      },
      series: [{
        type: 'pie',
        radius: [50, 90],
        center: ['30%', '50%'],
        label: {
          show: false
        },
        emphasis: {
          label: {
            show: true
          }
        },
        data: [
          {value: 10, name: '录播形式'},
          {value: 5, name: '短视频'},
          {value: 15, name: '直播形式'},
          {value: 25, name: '公开课'},
          {value: 20, name: '文字阅读'}
        ]
      }]
    },
    // 活跃用户(只取三个)
    activeUsers: [{
      id: 1,
      avatar: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3743111107,1940472030&fm=111&gp=0.jpg',
      name: 'haha',
      percent: 0.95,
      vip: '8',
      time: '20分钟前'
    }, {
      id: 2,
      avatar: 'http://img0.imgtn.bdimg.com/it/u=3256100974,305075936&fm=26&gp=0.jpg',
      name: '你猜我',
      percent: 0.8,
      vip: '5',
      time: '20分钟前'
    }, {
      id: 3,
      avatar: 'http://img0.imgtn.bdimg.com/it/u=2021421053,481069477&fm=26&gp=0.jpg',
      name: '123',
      percent: 0.7,
      vip: '4',
      time: '20分钟前'
    }],
    userStrokeColorList: [{
      '0%': '#9066f3',
      '100%': '#81e3fd',
    }, {
      '0%': '#2bc17b',
      '100%': '#9deadc',
    }, {
      '0%': '#fe8688',
      '100%': '#f651e3',
    }],
    courseList: [{
      id: 1,
      img: 'http://img5.imgtn.bdimg.com/it/u=3012245851,3627324032&fm=15&gp=0.jpg',
      name: '绘画',
      brief: '帮助学员快速入门',
      price: '1231'
    }, {
      id: 2,
      img: 'http://img4.imgtn.bdimg.com/it/u=4107904120,368345380&fm=26&gp=0.jpg',
      name: '语文',
      brief: '帮助学员快速入门',
      price: '1231'
    }, {
      id: 3,
      img: 'http://img2.imgtn.bdimg.com/it/u=1728605925,3108919797&fm=26&gp=0.jpg',
      name: '数学',
      brief: '帮助学员快速入门',
      price: '434'
    }]
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
    const { activeUsers, userStrokeColorList, courseList } = this.state
    const lineTitle = (
      <div className="line-title">
        最近7日
        <span className="ml30 color-gray fs14">
          成交量 <span className="text-green">——</span>
          <span className="mr10">访客量 <span className="text-orange">——</span></span>
        </span>
        <span className="fr color-gray fs14">
          <span className="mr5 cur-p">今日状况</span>
          <span className="mr5 cur-p">最近15天</span>
          <span className="cur-p">最近30天</span>
        </span>
      </div>
    )

    const paymentTitle = (
      <div>
        今日付款金额
        <span className="fr">日期：<DatePicker className="round-date"/></span>
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
              <div className="fr ta-r">
                <div className="mb5">销售额</div>
                <div className="fs16 mb5">¥0</div>
                <div>同昨天对比</div>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card className="user">
              <EduIcon type='icon-yonghu' className="icon" />
              <div className="fr ta-r">
                <div className="mb5">新用户</div>
                <div className="fs16 mb5">0</div>
                <div>同昨天对比</div>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card className="order">
              <EduIcon type='icon-dingdan1' className="icon" />
              <div className="fr ta-r">
                <div className="mb5">课程订单量</div>
                <div className="fs16 mb5">0</div>
                <div>同昨天对比</div>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card className="video">
              <EduIcon type='icon-shipin1' className="icon" />
              <div className="fr ta-r">
                <div className="mb5">视频播放量</div>
                <div className="fs16 mb5">0</div>
                <div>同昨天对比</div>
              </div>
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
                <Card className="active-user" title="活跃用户" extra={<a href="/main"><MoreOutlined /></a>}>
                  <ul>
                    {activeUsers.map((user, index) => {
                      return (
                        <li className="flex ai-c" key={user.id}>
                          <div>
                            <img className="avatar" src={user.avatar} alt="" />
                          </div>
                          <div className="level">
                            <div className="username">{user.name}<span className="vip text-green">VIP{user.vip}</span></div>
                              <Progress percent={user.percent * 100} strokeColor={userStrokeColorList[index]}/>
                            <div className="time">{user.time}</div>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
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
                <Card className="hot-course" title="月热门课程排行榜" extra={<a href="/main"><MoreOutlined /></a>}>
                  <ul>
                    {
                      courseList.map((course, index) => {
                        return(
                          <li className="flex ai-c" key={course.id}>
                            <div>
                              <img className="course-img" src={course.img} alt=""></img>
                            </div>
                            <div className="course-des">
                              <span>
                                <p>{course.name}</p>
                                {course.brief}
                              </span>
                              <div className="fr">
                                No.{index}
                                ¥{course.price}
                              </div>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
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