/** 
 * @flow
 * utils
*/
const localPath = require('path')

const utils = {
  localPath,
  // 跳转到下一页面
  pushNextPage(props, pageTitle, nextPageUrl, paramState = {}) {
    console.log('跳转到 ', pageTitle)
    props.history.push({
      pathname: nextPageUrl,
      state: paramState
    })
  },

  // 替换当前页面
  replaceCurrentPage(props, pageTitle, nextPageUrl, paramState = {}) {
    console.log('当前页面替换为 ', pageTitle)
    props.history.replace({
      pathname: nextPageUrl,
      state: paramState
    })
  },

  // 返回上一页面
  backToPage(props) {
    props.history.goBack()
  },

  // 判断某个对象是否为空对象，这里空对象的定义是没有自定义的属性
  isEmptyObject(e) {
    for (const t in e) {
      if (e.hasOwnProperty(t)) {
        return !1
      }
      return !0
    }
    return !0
  }
}

export default utils
global.utils = utils
