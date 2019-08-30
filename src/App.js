import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.jumpToPaySearch = this.jumpToPaySearch.bind(this)
    this.jumpToStudentInfo = this.jumpToStudentInfo.bind(this)
  }

  jumpToPaySearch () {
    console.log(this.props.history)
    // this.props.history.push('/PaySearch')
    this.props.history.push('/PaySearch', {flag: 2, name: 'PaySearch'})
  }

  jumpToStudentInfo () {
    console.log(this.props.history)
    this.props.history.push('/StudentInfo', {flag: 1, name: 'StudentInfo'})
  }
  render () {
    let MarginbottomStyle = 'width90 mg-auto m-button-log mPadding-b mPadding-t marginTop10'
    const bodyHeight = document.body.clientHeight
    const bodyScreenHeight = window.screen.height
    if (bodyScreenHeight - bodyHeight > 30) {
      MarginbottomStyle = 'mb5 width90 mg-auto m-button-log mPadding-t marginTop10'
    }
    return (
      <div className='App'>
        <a
          className='theme fs20'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>学习React</a>
        <div style={{marginTop: 10}} onClick={this.jumpToStudentInfo}>
        <span className='theme fs18'>学员信息</span>
        </div>
        <div style={{marginTop: 10}} onClick={this.jumpToPaySearch}>
        <span className='theme fs18'>支付信息</span>
        </div>
      </div>
    )
  }
}

export default App
