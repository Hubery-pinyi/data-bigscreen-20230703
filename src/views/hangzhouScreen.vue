<template>
  <div>
    <myLayout>
      <!-- 左 -->
      <template v-slot:content_main_left>
        <div class="content_left">
          <div class="total_data">
            <subTitle subTitle="数据总览"></subTitle>
            <revenueCom :totalRevenue="yearRevenueAmount" :totalPercent="yearDiffRate" :monthPercent="monthDiffRate" :monthRevenue="monthRevenueAmount" :dailyPercent="dayDiffRate" :dailyRevenue="dayRevenueAmount">
            </revenueCom>
          </div>
          <div class="asys_data">
            <subTitle subTitle="数据分析"></subTitle>
            <div class="passRevenue">
              <passagerAndRevenue :yAxisData="hotelNameArray" :serieFlowData="flowData" :seriesRevenueData="revenueData" :gridLeft="gridLeft" :gridRight="gridRight" :gridWidth="gridWidth" :yAxislabelMargin="yAxislabelMargin" :seriesLabelOffset="seriesLabelOffset">
              </passagerAndRevenue>
            </div>
          </div>
        </div>

      </template>
      <!-- 中 -->
      <template v-slot:content_main_middle>
        <div class="content_middle">
          <div class="table_box">
            <div class="table_box_data">
              <div class="table_box_left">
                <dailyPassengerAndRevenue :dailyNumber="dayPersonCount" dailyFont="日客流量"></dailyPassengerAndRevenue>
              </div>
              <div class="table_box_right">
                <dailyPassengerAndRevenue :dailyNumber="dayRevenueAmount" dailyFont="日营收"></dailyPassengerAndRevenue>
              </div>
            </div>
          </div>
          <div class="map_box">
            <hangzhouMap></hangzhouMap>
          </div>
          <div class="pie_box">
            <div class="tickets_number">
              <subTitle subTitle="景区售票人数"></subTitle>
              <ticketNumberPie :groupCount="sanke" :interCount="wangluo" :stayCount="canyinzhusu" :exCount="kapiao" :allTicketNumbers="allTicketNumbers" :groupCountRate="groupCountRate" :interCountRate="interCountRate" :stayCountRate="stayCountRate" :exCountrate="exCountrate"></ticketNumberPie>
            </div>
            <div class="passengers_number">
              <subTitle subTitle="游客规模"></subTitle>
              <div class="passengers_number_pies">
                <touristScale :sale1Revenue="scaleRevenueOne" :sale2Revenue="scaleRevenueTwo" :offlineRevenue="outLine" :onlineRevenue="online" :totalsaleCount="totalsaleCount" :totalLine="totalLine"></touristScale>
              </div>
            </div>
          </div>
        </div>
      </template>
      <!-- 右 -->
      <template v-slot:content_main_right>
        <div class="content_right">
          <div class="weather_box">
            <subTitle subTitle="天气情况"></subTitle>
            <div class="date_add">
              <el-date-picker v-model="value1" type="date" placeholder="选择日期" @change="chooseDate"> </el-date-picker>
              <div>湖州市安吉县</div>
            </div>
            <weather :tempture="temperature" :weatherType="weatherCondition" :aqi="AQI" :PM25="PM25" :wetness="humidity" :temptureMax="temperatureMax" :temptureMIn="temperatureMin"></weather>
          </div>
          <div class="sales_box">
            <subTitle subTitle="渠道销售统计"></subTitle>
            <div class="sales_box_bar">
              <salesCount :salesWayName="areaNames" :salesWayData="areaDatas" :gridLeft_channel="gridLeft_channel" :gridRight_channel="gridRight_channel" :gridWidth_channel="gridWidth_channel" :yAxislabelMargin_channel="yAxislabelMargin_channel" :seriesLabelOffset_channel="seriesLabelOffset_channel"></salesCount>
            </div>
          </div>
          <div class="passengerSource_box">
            <subTitle subTitle="游客来源地"></subTitle>
            <div class="passengerSource">
              <passengerSource :xAxisData="cityNames" :seriesData="cityData"></passengerSource>
            </div>
          </div>
          <div class="hotel_box">
            <subTitle subTitle="酒店数据"></subTitle>
            <div class="hotelData">
              <hotelData :canyin="canyinData" :kefang="kefangData" :qita="qitaData" :totalRevenue="totalRevenue" :canyinRate="canyinRate" :kefangRate="kefangRate" :qitaRate="qitaRate"></hotelData>
            </div>
          </div>
        </div>

      </template>
    </myLayout>
  </div>
</template>

<script>
import myLayout from '../components/layout/myLayout.vue' // 页面布局
import subTitle from '../components/subTitle.vue' // 小标题组件
import revenueCom from '../components/revenueCom.vue' // 数据总览
import passagerAndRevenue from '../components/passengerAndRevenue.vue' // 数据分析组件
import dailyPassengerAndRevenue from '../components/dailyPassengerAndRevenue.vue' // 日客流量组件日营收组件
import hangzhouMap from '../components/hangzhouMap.vue' // 常州地图组件
import ticketNumberPie from '../components/ticketNumbers.vue' // 景区售票人数
import touristScale from '../components/touristScale.vue' // 游客规模
import weather from '../components/groupWeather.vue' // 天气组件(和集团页面公用)
import salesCount from '../components/salesCount.vue' // 销售渠道统计组件
import passengerSource from '../components/passengerSource.vue' // 游客来源地组件
import moment from 'moment'

import { getTotalData, getAnalyData, getPassengersData, getTicketsrsData, getTouristsData, getChannelData, getHotelData, getGoodWeather } from '../api/global.js'
import { removeAccessToken, removeAccessTokenExpiredTime } from '../utils/auth'
import hotelData from '../components/hotelData.vue'
export default {
  name: 'hangzhouScreen',
  components: {
    myLayout,
    subTitle,
    revenueCom,
    passagerAndRevenue,
    dailyPassengerAndRevenue,
    hangzhouMap,
    ticketNumberPie,
    touristScale,
    weather,
    salesCount,
    passengerSource,
    hotelData
  },
  data () {
    return {
      value1: '',
      // 数据分析
      hotelNameArray: [],
      flowData: [],
      revenueData: [],
      // 渠道销售统计
      areaNames: [],
      areaDatas: [],
      labelWidth: [320, 0],
      yesterdayDate: '', // 昨天的日期
      yearRevenueAmount: '0', // 整年总营收
      yearDiffRate: 0, // 年总营收上涨率
      monthRevenueAmount: '0', // 当月总营收
      monthDiffRate: 0, // 当月营收上涨率
      dayRevenueAmount: '0', // 当日营收
      dayDiffRate: 0, // 当日营收上涨率
      dayPersonCount: '0', // 日人流量
      // 景区售票人数
      sanke: 0,
      kapiao: 0,
      wangluo: 0,
      canyinzhusu: 0,
      allTicketNumbers: 0,
      groupCountRate: 0,
      interCountRate: 0,
      stayCountRate: 0,
      exCountrate: 0,
      // 游客规模
      scaleRevenueOne: 0,
      scaleRevenueTwo: 0,
      outLine: 0,
      online: 0,
      totalsaleCount: 0,
      totalLine: 0,
      // 酒店数据
      canyinData: 0,
      kefangData: 0,
      qitaData: 0,
      totalRevenue: 0,
      canyinRate: 0,
      kefangRate: 0,
      qitaRate: 0,
      // 天气情况
      temperature: '', // 温度
      weatherCondition: '', // 天气情况 '晴朗'
      temperatureMax: '', // 最高气温
      temperatureMin: '', // 最高气温
      AQI: '',
      PM25: '',
      humidity: '', // 湿度
      // 数据分析样式
      gridLeft: '0%',
      gridRight: '6%',
      gridWidth: '83%',
      yAxislabelMargin: 10,
      seriesLabelOffset: [225, 0],
      // 数据来源
      cityNames: [],
      cityData: [],
      // 渠道销售统计样式
      gridLeft_channel: '0%',
      gridRight_channel: '5%',
      gridWidth_channel: '85%',
      yAxislabelMargin_channel: 10,
      seriesLabelOffset_channel: [245, 0]
    }
  },
  created () {
    // 清空上次的token
    removeAccessTokenExpiredTime()
    removeAccessToken()
    const yesDate = new Date().getTime() - 24 * 60 * 60 * 1000
    this.yesterdayDate = moment(yesDate).format('yyyy-MM-DD')
    this.value1 = moment(yesDate).format('yyyy-MM-DD')
    const that = this
    this.getAllData()
    // 10:00-11:00 或者 20:00-21:00之间每隔五分钟更新一次
    setInterval(() => {
      if (this.isTimeBetween('10:00', '10:05') || this.isTimeBetween('13:00', '13:05') || this.isTimeBetween('20:00', '20:05')) {
        const yesDate = new Date().getTime() - 24 * 60 * 60 * 1000
        this.yesterdayDate = moment(yesDate).format('yyyy-MM-DD')
        this.value1 = yesDate
        that.getAllData()
      }
      // 获取当前系统时间
      // const refresHours = new Date().getHours()
      // console.log(refresHours, '刷新的时间')
      // if (refresHours >= 10 && refresHours < 11) {
      // const yesDate = new Date().getTime() - 24 * 60 * 60 * 1000
      // this.yesterdayDate = moment(yesDate).format('yyyy-MM-DD')
      // this.value1 = yesDate
      // that.getAllData()
      // } else if (refresHours >= 20 && refresHours < 21) {
      // const yesDate = new Date().getTime() - 24 * 60 * 60 * 1000
      // this.yesterdayDate = moment(yesDate).format('yyyy-MM-DD')
      // this.value1 = yesDate
      // that.getAllData()
      // }
    }, 300 * 1000)
  },
  methods: {
    getAllData () {
      this.getGrouPTotalData()
      this.getGroupAnalyData()
      this.getGroupPassengersData()
      this.getGroupTicketsrsData()
      this.getGroupTouristsData()
      this.getGroupChannelData()
      this.getGroupHotelData()
      this.getWeather()
    },
    // 获取酒店数据总览
    getGrouPTotalData () {
      getTotalData(1, this.yesterdayDate)
        .then(res => {
          if (res) {
            // console.log(res, '杭州酒店数据总览')
            this.yearRevenueAmount = res.yearRevenueAmount
            this.yearDiffRate = res.yearDiffRate
            this.monthRevenueAmount = res.monthRevenueAmount
            this.monthDiffRate = res.monthDiffRate
            this.dayRevenueAmount = res.dayRevenueAmount
            this.dayDiffRate = res.dayDiffRate
            this.dayPersonCount = res.dayPersonCount
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 获取数据分析数据-----------------------------------------------------------
    getGroupAnalyData () {
      getAnalyData(1, this.yesterdayDate)
        .then(res => {
          if (res) {
            // console.log(res, '杭州数据分析')
            this.hotelNameArray = []
            this.flowData = []
            this.revenueData = []
            res.forEach(item => {
              this.hotelNameArray.push(item.companyName)
              this.flowData.push(item.dayCount)
              this.revenueData.push(Math.floor(item.dayRevenue))
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 城市游客排行(左上)
    getGroupPassengersData () {
      this.cityNames = []
      this.cityData = []
      getPassengersData(1, this.yesterdayDate)
        .then(res => {
          if (res) {
            // console.log(res, '杭州城市游客排行')
            const newRes = res.slice(0, 6)
            newRes.forEach(item => {
              this.cityNames.push(item.cityName)
              this.cityData.push(item.carCount)
            })
            // console.log(this.cityNames, this.cityData)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 景区售票人数
    getGroupTicketsrsData () {
      getTicketsrsData(1, this.yesterdayDate)
        .then(res => {
          if (res) {
            // console.log(res, '杭州景区售票人数')
            this.sanke = res.fitGroupCount
            this.kapiao = res.exchangeCount
            this.wangluo = res.internetCount
            this.canyinzhusu = res.stayCount
            this.allTicketNumbers = res.totalCount
            this.groupCountRate = res.fitGroupCountRate
            this.interCountRate = res.internetCountRate
            this.stayCountRate = res.stayCountRate
            this.exCountrate = res.exchangeCountRate
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 游客规模
    getGroupTouristsData () {
      getTouristsData(1, this.yesterdayDate)
        .then(res => {
          if (res) {
            console.log(res, '杭州游客规模')
            this.scaleRevenueOne = res.sale1Revenue
            this.scaleRevenueTwo = res.sale2Revenue
            this.outLine = res.offlineRevenue
            this.online = res.onlineRevenue
            this.totalsaleCount = res.totalSaleRevenue
            this.totalLine = res.totalLineRevenue
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 渠道销售统计
    getGroupChannelData () {
      getChannelData(1, this.yesterdayDate)
        .then(res => {
          if (res) {
            // console.log(res, '杭州渠道销售统计')
            this.areaNames = []
            this.areaDatas = []
            res.forEach(item => {
              this.areaNames.push(item.channelName)
              this.areaDatas.push(Math.floor(item.revenue))
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 酒店数据
    getGroupHotelData () {
      getHotelData(1, this.yesterdayDate)
        .then(res => {
          if (res) {
            // console.log(res, '杭州酒店数据')
            this.canyinData = res.cateringAmount
            this.kefangData = res.roomAmount
            this.qitaData = res.otherAmount
            this.totalRevenue = res.totalAmount
            this.canyinRate = res.cateringAmountRate
            this.kefangRate = res.roomAmountRate
            this.qitaRate = res.otherAmountRate
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 获取当前天气
    getWeather () {
      getGoodWeather('安吉')
        .then(res => {
          if (res) {
            // console.log(res.heWeather5[0], '杭州天气')
            this.temperature = res.heWeather5[0].now.tmp
            this.weatherCondition = res.heWeather5[0].now.cond.txt
            this.temperatureMax = res.heWeather5[0].daily_forecast[0].tmp.max
            this.temperatureMin = res.heWeather5[0].daily_forecast[0].tmp.min
            this.AQI = res.heWeather5[0].aqi.city.aqi
            this.PM25 = res.heWeather5[0].aqi.city.pm25
            this.humidity = res.heWeather5[0].now.hum
          }
        })
        .then(err => {
          console.log(err)
        })
    },
    chooseDate (e) {
      const choosedTime = moment(e.getTime()).format('yyyy-MM-DD')
      this.yesterdayDate = choosedTime
      this.getAllData()
      setTimeout(() => {
        const yesDate = new Date().getTime() - 24 * 60 * 60 * 1000
        this.yesterdayDate = moment(yesDate).format('yyyy-MM-DD')
        this.value1 = yesDate
        this.getAllData()
      }, 60 * 1000)
    },
    isTimeBetween (timeStart, timeEnd) {
      const now = new Date()
      const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), timeStart.split(':')[0], timeStart.split(':')[1])
      const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), timeEnd.split(':')[0], timeEnd.split(':')[1])
      return start <= now && end >= now
    }
  }
}
</script>

<style lang="less" scoped>
.date_add {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 20px;
  color: rgba(255, 255, 255, .6);
}
.content_left {
  width: 100%;
  height: 900px;
  margin-top: 20px;

  .total_data {
    width: 100%;
    height: 327px;
  }

  .asys_data {
    width: 100%;
    height: 340px;

    .passRevenue {
      margin-top: 15px;
      margin-bottom: 20px;
      width: 100%;
      height: 340px;
    }
  }
}

.content_middle {
  .table_box {
    width: 100%;
    height: 140px;

    .table_box_data {
      display: flex;
      justify-content: center;

      .table_box_left {
        margin-right: 20px;
        height: 97px;
        width: 271px;
        background: url('../assets/images/bj_kl@2x.png') no-repeat center center;
        background-size: cover;
      }

      .table_box_right {
        margin-right: 20px;
        height: 97px;
        width: 271px;
        background: url('../assets/images/bj_kl@2x.png') no-repeat center center;
        background-size: cover;
      }
    }
  }

  .map_box {
    margin-top: -25px;
    width: 100%;
    height: 610px;
    margin-bottom: 0px;
  }

  .pie_box {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 180px;
  }

  .tickets_number {
    flex: 3;
  }

  .passengers_number {
    flex: 5;
  }
}

.content_right {
  margin-top: 20px;
  width: 100%;

  .weather_box {
    width: 100%;
    height: 197px;
  }

  .sales_box {
    width: 100%;
    height: 304px;

    .sales_box_bar {
      width: 100%;
      height: 290px;
      margin-top: 4px;
      margin-bottom: 10px;
    }
  }

  .passengerSource_box {
    width: 100%;
    height: 201px;
  }

  .passengerSource {
    width: 100%;
    height: 201px;
  }

  .hotel_box {
    width: 100%;
    height: 188px;

    .hotelData {
      width: 100%;
      height: 188px;
      margin-top: -10px;
    }
  }
}
</style>

<style lang="less">
.el-input__inner{
  outline: none;
  box-shadow: none;
  color: rgba(255, 255, 255, .6);
  height: 20px;
  background-color:rgba(255, 255, 255, .0);
  border: 1px solid rgba(255, 255, 255, .0);
  line-height: 30px;
  padding: 0;
}

.el-input__icon{
  line-height: 20px;
}
.el-picker-panel{
  background-color:rgba(14, 19, 35, .9) ;
  color: rgba(255, 255, 255, 1) ;
  border: 1px dashed #E4E7ED;
}
.el-date-table td.today span {
    color: rgba(0, 218, 216, 1);
    font-weight: 700;
}
.el-date-table td.today span:hover {
    color: rgba(0, 218, 216, 1);
    font-weight: 700;
}
.el-date-table td.current:not(.disabled) span {
    color: #FFF;
    background-color:  rgba(0, 218, 216, 1);
}
.el-date-picker__header-label.active, .el-date-picker__header-label{
  color: rgba(255, 255, 255, 1);
}
.el-date-table td.available:hover {
    color: rgba(0, 218, 216, 1);
}
.el-date-picker__header-label.active, .el-date-picker__header-label:hover {
    color: rgba(0, 218, 216, 1);
}
.el-picker-panel__icon-btn{
  color: rgba(255, 255, 255, 1);
}
.el-picker-panel__icon-btn:hover {
    color: rgba(0, 218, 216, 1);
}
.el-date-table th{
  color: rgba(255, 255, 255, 1);
}
.el-input--prefix .el-input__inner {
  padding-left: 0;
  cursor: pointer;
}
.el-input__icon .el-icon-date{
  display: none;
}
.el-icon-date:before {
    content: "";
}
.el-input__suffix-inner{
  display: none;
}
</style>
