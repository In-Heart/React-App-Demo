/**
 * @flow
 * 学生信息查询
 */
import React, { Component } from 'react'
import { Toast, Button } from 'antd-mobile'
import Header from '../common/Header'

export default class StudentInfo extends Component {

  constructor (props) {
    super(props)
    this.state = {
      headerState: {
        backShow: true, // 是否显示返回键
        rightText: '返回',
        title: '查询学生信息', // 显示标题
      }
    }
    this.userIcon = this.userIcon.bind(this)
  }

  userIcon () {
    // console.log(Toast)
    // console.log(this)
    Toast.info('点击了用户头像')
    // this.props.history.push('./App', {flag: 1})
  }

  render () {
    let MarginbottomStyle = 'width90 mg-auto m-button-log mPadding-b mPadding-t'
    const bodyHeight = document.body.clientHeight
    const bodyScreenHeight = window.screen.height
    if (bodyScreenHeight - bodyHeight > 30) {
      MarginbottomStyle = 'mb5 width90 mg-auto m-button-log mPadding-t'
    }
    return (
      <div className='body-style'>
        <Header headerState={this.state.headerState} />
        <div className='body-style top3_66' onClick={this.userIcon}>
          <span className='m-btn-16 fs22 dis-bk tc'>登录</span>
        </div>
        <Button onClick={this.userIcon}>
          Start
        </Button>
      </div>
    )
  }
}
