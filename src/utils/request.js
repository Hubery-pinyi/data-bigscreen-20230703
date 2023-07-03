/* eslint-disable */
import { Config } from '@/api/config'
import axios from 'axios'
import {
  getAccessToken,
  setAccessToken,
  getAccessTokenExpiredTime,
  setAccessTokenExpiredTime,
  getIntroduction, getCustomBase64
} from '@/utils/auth'
import Vue from 'vue'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 判断token是否失效
// eslint-disable-next-line no-unused-vars
const checkToken = (req) => {
  let key = false

  if (!getAccessToken()) {
    return true
  }
  // eslint-disable-next-line camelcase,no-unused-vars
  // const expired_time = localStorage.getItem('expired_time') || '';
  const expired_time = getAccessTokenExpiredTime()
  // eslint-disable-next-line camelcase
  if (expired_time) {
    // eslint-disable-next-line radix
    const nowTime = parseInt(new Date().getTime() / 1000)
    // eslint-disable-next-line camelcase
    key = nowTime > expired_time
  } else {
    key = true
  }
  return key
}

let isRefreshToken = false // 防止同一时间段多次刷新

// 存储请求的数组
let refreshSubscribers = []

// 将所有的请求都push到数组中,其实数组是[function(token){}, function(token){},...]
function subscribeTokenRefresh(cb) {
  refreshSubscribers.push(cb)
}

// 数组中的请求得到新的token之后自执行，用新的token去请求数据
function onRrefreshed(token){
  refreshSubscribers.map((cb) => cb(token))
}

// 1. 定义基础路劲
const BASE_URL = Config.restUrl
const CLIENT_ID = Config.clientId
const CLIENT_SECRET = Config.clientSecret

// 刷新token
// eslint-disable-next-line no-unused-vars
function refreshToken() {
  var expiredTime = parseInt(new Date().getTime() / 1000) + 0.1 * 60 * 60
  return new Promise((resolve, reject) => {
    // 获取token--------------------------------
    axios.get(`${BASE_URL}oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`).then((res) => {
      if (res.status === 200) {
        // 重新存储token和失效时间
        localStorage.setItem('token', res.data.content);
        // eslint-disable-next-line radix
        localStorage.setItem('expired_time', parseInt(new Date().getTime() / 1000) + 0.1 * 60 * 60);
        setAccessToken(res.data.content)
        setAccessTokenExpiredTime(expiredTime)
        resolve()
      } else {
        if (res.data.code === 401) { // 未认证
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('token获取失败')
        }
        reject()
      }
      // eslint-disable-next-line no-unused-vars
    }).catch((error) => {
      reject()
    })
  })
}

service.interceptors.request.use(
  (req) => {
    // 登录状态
    // eslint-disable-next-line no-param-reassign
    req.headers.Authorization = 'application/json'
    // eslint-disable-next-line no-param-reassign
    req.headers.access_token = getAccessToken()
    // req.headers['X-Token'] = getToken();
    if (getIntroduction()) {
      req.headers.Custom = getCustomBase64()
    }

    const isExpired = checkToken(req)
    if (isExpired) { // 是否token是否过期
      if (!isRefreshToken) { // 是否正在刷新
        isRefreshToken = true
        refreshToken().then(() => {
          // 重新设置token
          const token = getAccessToken()
          onRrefreshed(token)
          // eslint-disable-next-line no-const-assign
          refreshSubscribers = []
        }).catch((error) => { // 请求失败的话重新登陆
          refreshSubscribers = []
        }).finally(() => {
          isRefreshToken = false
        })
      }
      /* 将请求挂起 callback回调函数执行 等待token刷新完成return promise对象 */
      // eslint-disable-next-line no-unused-vars
      const retry = new Promise((resolve, reject) => {
        subscribeTokenRefresh((token) => {
          // eslint-disable-next-line no-param-reassign
          req.headers.access_token = token

          resolve(req)
        })
      })

      return retry
    }
    return Promise.resolve(req)
  }
)

service.interceptors.response.use(
  // eslint-disable-next-line consistent-return
  (response) => {
    return response.data
  },
  (error) => {
    console.dir(error)
    let message = error.response.data.message || '请求失败'
    return Promise.reject(message)
  }
)

export default service
