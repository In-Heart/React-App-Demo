/** 
 * @flow
 * 入口文件
*/
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './resource/css/index.css'
import * as serviceWorker from './serviceWorker'
import RouteConfig from './RouteConfig'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <RouteConfig></RouteConfig>
  </Provider>,
  document.getElementById('root'))
serviceWorker.unregister()
