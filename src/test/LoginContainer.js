import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginAction from '../../actions/LoginAction';
import utils from '../../constants/utils';
import md5 from 'blueimp-md5';
import { ActivityIndicator, Toast } from 'antd-mobile';
import LoginForm from '../../components/login/LoginForm';
import loginUser from '../../resources/images/logoUser.png';

class LoginContainer extends Component {
  constructor() {
    super();

    this.forgetPwd = this.forgetPwd.bind(this);
    this.submitValidationInfo = this.submitValidationInfo.bind(this);
  }

  forgetPwd(e) {
    e.stopPropagation();
    utils.pushNextPage('忘记密码', '/login/forgetPwd');
  }

  submitValidationInfo() {
    const { loginAction, loginState } = this.props;
    const { userName, password } = loginState;

    if(userName && password) {
      const loginPwd = md5(password);
      // const loginPwd = utils.AESEncrypt(password);
      // console.log(loginPwd, utils.AESDecrypt(loginPwd));
      const userInfo = { loginName: userName, loginPwd };
      loginAction.loginPost(userInfo);
    } else if(!userName) {
      Toast.info('请填写用户名');
    } else {
      Toast.info('请填写密码');
    }
  }

  render() {
    const { loginState, loginAction } = this.props;
    let MarginbottomStyle = 'width90 mg-auto m-button-log mPadding-b mPadding-t';
    const bodyHeight = document.body.clientHeight;
    const bodyScreenHeight = window.screen.height;
    if(bodyScreenHeight - bodyHeight > 30) {
      MarginbottomStyle = 'mb5 width90 mg-auto m-button-log mPadding-t';
    }
    return (
      <div className="loginBg clearfix mg-auto position" style={{ height: '100%' }}>
        <div className=" position  dis-fx flex-direction" style={{ height: '100%' }}>
          <ul className="white flex3-2 dis-fx alc">
            <li className="width100 lh24 tc">
              <div className="m-log-img width25 tc mg-auto m-sixRing3">
                <img src={loginUser} className="width100" style={{ verticalAlign: 'middle' }} />
              </div>
            </li>
          </ul>

          <div className="loginMain flex8 flex-direction dis-fx alc-end">
            <LoginForm loginAction={loginAction} loginState={loginState} />
            <div className="width90 lightgrey fs12 pt12-2 pb12-2 mg-auto clearfix ">
              <div className="dis-bk fr">
                {/* <span className="darkgray fs14 fr" onClick={this.forgetPwd}>忘记密码</span> */}
              </div>
            </div>
            <div className={MarginbottomStyle} onClick={this.submitValidationInfo}>
              <span className="m-btn-16 fs22 dis-bk tc">登录</span>
            </div>
          </div>
        </div>
        <ActivityIndicator toast text="正在加载" animating={loginState.sendingReq} />
      </div>
    );
  }
}

LoginContainer.propTypes = {
  loginState: PropTypes.object.isRequired,
  loginAction: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  loginState: state.login,
});

const mapDispatchToProps = dispatch => ({
  loginAction: bindActionCreators(LoginAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
