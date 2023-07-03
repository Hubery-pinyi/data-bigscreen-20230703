import * as dd from 'dingtalk-jsapi'

export default {
  getUrlKey: function (name) {
    // eslint-disable-next-line
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
  }
}

export function getQueryVariable (variable) {
  const query = window.location.search.substring(1)
  const vars = query.split('&')
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=')
    if (pair[0] === variable) {
      return pair[1]
    }
  }
  return (false)
}

export function getCode (callback) {
  const corpId = 'ding57fa84a8cdcf6f3435c2f4657eb6378f'
  if (dd.env.platform !== 'notInDingTalk') {
    dd.ready(() => {
      // 使用SDK 获取免登授权码
      dd.runtime.permission.requestAuthCode({
        corpId: corpId,
        onSuccess: (info) => {
          // 根据钉钉提供的api 获得code后,再次调用这个callback方法
          // 由于是钉钉获取code是异步操作,不知道什么时候执行完毕
          // callback 函数会等他执行完毕后在自己调用自己
          callback(info.code)
        },
        onFail: (err) => {
          alert('fail')
          alert(JSON.stringify(err))
        }
      })
    })
  }
}
