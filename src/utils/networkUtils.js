/** 
 * @flow
 * 封装网络请求
*/
import axios from 'axios'
import { stringify } from 'qs'

axios.defaults.baseURL = 'http://114.116.224.210:8088/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.post['Accept'] = 'application/json;charset=UTF-8'

axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
  var config = err.config
  // If config does not exist or the retry option is not set, reject
  if (!config || !config.retry) return Promise.reject(err)
  // Set the variable for keeping track of the retry count
  config.__retryCount = config.__retryCount || 0
  // Check if we've maxed out the total number of retries
  if (config.__retryCount >= config.retry) {
    // Reject with the error
    return Promise.reject(err)
  }
  // Increase the retry count
  config.__retryCount += 1
  // Create new promise to handle exponential backoff
  var backoff = new Promise(function (resolve) {
    setTimeout(function () {
      resolve()
    }, config.retryDelay || 1)
  })
  // Return the promise in which recalls axios to retry the request
  return backoff.then(function () {
    return axios(config)
  })
})

function request(url, options) {
  return axios(
    {
      url,
      ...options
    }
  ).then(
    ({ data }) => data
  ).catch(
    err => ({ err })
  )
}

function get(url, params, callBack) {
  return axios({
    method: 'get',
    url: `${url}?${stringify(params)}`,
    responseType: 'json',
    ...res
  }).then((response) => {
    response.data && response.data.d ? callBack(true, response.data.d) : callBack(true, response.data);
  }).catch((err) => {
    callBack(false, err);
    console.log(err)
  });
}

function post(url, data, callBack) {
  return axios({
    url,
    method: 'post',
    data,
    retry: 0,
  }).then((response) => {
    callBack && callBack(true, response.data)
  }).catch((err) => {
    callBack && callBack(false, err)
    console.log(err)
  })
}


export default {
  request,
  post,
  get,
};
