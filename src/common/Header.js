import React, { Component } from 'react';
import PropTypes from 'prop-types';
import utils from '../utils/utils';

class Header extends Component {

  constructor() {
    super();

    this.historyBack = this.historyBack.bind(this);
    this.iconClick = this.iconClick.bind(this);
  }

  historyBack(e) {
    e.stopPropagation(); // 阻止冒泡

    if(this.props.callbackFun) {
      this.props.callbackFun();
      if(this.props.onlyCallback) return;
    }

    const { title } = e.currentTarget.dataset;
    utils.backToPage(title);
  }

  iconClick(e) {
    e.stopPropagation(); // 阻止冒泡

    const { callForwardFun } = this.props;
    if(callForwardFun) {
      callForwardFun(e);
    }
  }

  render() {
    const { backShow, rightText, title, router } = this.props.headerState;

    return (
      <div className="i-head mg-auto area">
        <div className="fl width20">
          {
            backShow ? (
              <span
                className="m-back m-icon"
                data-title={rightText || '首页'}
                onClick={this.historyBack}>
              </span>
            ) : null
          }
          &nbsp;
        </div>
        <div className="fl width60 lh46">
          <p className="tc fs18 theme lh45">{title}</p>
        </div>
        <div className="fr width20" onClick={this.iconClick}>
        {
          !(utils.isEmptyObject(router)) && router.show ? router.tag : null
        }
        </div>
      </div>
    );
  }
}

// 导航条状态栏参数说明
// headerState: {
//   backShow: false, // 是否显示返回键
//   title: '', // 显示标题,如果为'',默认显示logo.png
//   router: {
//     show: false, // 右侧图标是否显示，默认不显示
//     tag: null, // 如果显示图标，则tag表示显示的图标< />，默认为空
//   },
// }

Header.propTypes = {
  headerState: PropTypes.object.isRequired, // 导航条状态栏
  callbackFun: PropTypes.func, // 在左边回退图标存在的情况下，点击的回调函数
  callForwardFun: PropTypes.func, // 在右边图表存在的情况下，点击的回调函数
  onlyCallback: PropTypes.bool, // 是否只执行传入的callbackFun函数，默认为false
};

export default Header;

