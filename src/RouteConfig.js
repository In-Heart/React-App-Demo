/**
 * @flow
 * 路由
 */
import React from 'react'
import { Router, Route } from 'react-router-dom'
import 'core-js'

import StudentInfo from './test/StudentInfo'
import PaySearch from './test/PaySearch'
import App from './App'
import { history } from './store'

class RouteConfig extends React.Component {

  render () {
    return (
      <Router history={history}>
        {/* 测试 */}
        <div>
            <Route path='/' component={App} />
            <Route path='/StudentInfo' component={StudentInfo} />
            <Route path='/PaySearch' component={PaySearch} />
        </div>
      </Router>
    )
  }
}

export default RouteConfig
