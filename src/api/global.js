import request from '@/utils/request'
// eslint-disable-next-line
import { Config } from './config'

const BASE_URL = Config.restUrl

// 数据总览
export function getTotalData (type, currentDate) {
  return request({
    url: `${BASE_URL}business_tourism/screen_report/all_revenues?type=${type}&currentDate=${currentDate}`,
    method: 'get'
  })
}
// 数据分析
export function getAnalyData (type, currentDate) {
  return request({
    url: `${BASE_URL}business_tourism/screen_report/company_daily_revenues?type=${type}&currentDate=${currentDate}`,
    method: 'get'
  })
}

// 城市游客排行(左上)
export function getPassengersData (type, currentDate) {
  return request({
    url: `${BASE_URL}business_tourism/screen_report/tourist_rank?type=${type}&currentDate=${currentDate}`,
    method: 'get'
  })
}

// 景区售票人数
export function getTicketsrsData (type, currentDate) {
  return request({
    url: `${BASE_URL}business_tourism/screen_report/scenic_tickets?type=${type}&currentDate=${currentDate}`,
    method: 'get'
  })
}

// 游客规模
export function getTouristsData (type, currentDate) {
  return request({
    url: `${BASE_URL}business_tourism/screen_report/tourist_scale?type=${type}&currentDate=${currentDate}`,
    method: 'get'
  })
}

// 渠道销售统计
export function getChannelData (type, currentDate) {
  return request({
    url: `${BASE_URL}business_tourism/screen_report/channel_sales?type=${type}&currentDate=${currentDate}`,
    method: 'get'
  })
}

// 酒店数据
export function getHotelData (type, currentDate) {
  return request({
    url: `${BASE_URL}business_tourism/screen_report/hotel_revenues?type=${type}&currentDate=${currentDate}`,
    method: 'get'
  })
}
// 天气
export function getGoodWeather (city) {
  return request({
    url: `${BASE_URL}core_common/weather/yesterday/latest/${city}`,
    method: 'get'
  })
}
