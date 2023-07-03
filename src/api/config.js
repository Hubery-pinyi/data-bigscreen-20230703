class Config {
  // eslint-disable-next-line no-useless-constructor,no-empty-function
  constructor () {

  }
}

// eslint-disable-next-line
Config.env = PublicConfig.env

// Config.restUrl = Config.env === 'dev' ? 'http://192.168.10.141:8081/' : 'http://bus.uu1.com/'
Config.restUrl = Config.env === 'dev' ? 'https://test-bus.uu1.com/' : 'http://bus.uu1.com/'

Config.onPay = true // 是否启用支付

Config.clientSecret = Config.env === 'dev' ? 'czcqMvc2016' : 'js.admin@2020'

Config.clientId = Config.env === 'dev' ? 'czcqMvc' : 'js.admin'

// eslint-disable-next-line
export { Config };