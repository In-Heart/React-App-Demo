/**
 * @flow
 * 缴费查询
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


export default class PaySearch extends Component {
  constructor() {
    super();
    this.state = {
      headerState: {
        backShow: true, // 是否显示返回键
        title: '支付查询', // 显示标题
      },
    }
  }
  
}
