<template>
  <div>
    <myLayout>
      <!-- 左 -->
      <template v-slot:content_main_left>
        <div class="content_left">
          <div class="total_data">
            <subTitle subTitle="数据总览"></subTitle>
            <revenueCom :totalRevenue="yearRevenueAmount" :totalPercent="+yearDiffRate" :monthRevenue="monthRevenueAmount"
              :monthPercent="+monthDiffRate" :dailyRevenue="dayRevenueAmount" :dailyPercent="+dayDiffRate"></revenueCom>
          </div>
          <div class="asys_data">
            <subTitle subTitle="数据分析"></subTitle>
            <div class="passRevenue">
              <passagerAndRevenue :yAxisData="hotelNameArray" :serieFlowData="flowData" :seriesRevenueData="revenueData"
                :gridLeft="gridLeft" :gridRight="gridRight" :gridWidth="gridWidth" :yAxislabelMargin="yAxislabelMargin"
                :seriesLabelOffset="seriesLabelOffset">
              </passagerAndRevenue>
            </div>
          </div>
          <div class="hotel_data">
            <subTitle subTitle="酒店数据"></subTitle>
            <div class="hote_data_com">
              <hotelData :canyin="canyinData" :kefang="kefangData" :qita="qitaData" :totalRevenue="totalRevenue"
                :canyinRate="canyinRate" :kefangRate="kefangRate" :qitaRate="qitaRate"></hotelData>
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
            <changzhouMap></changzhouMap>
          </div>
          <div class="pie_box">
            <div class="tickets_number">
              <subTitle subTitle="景区售票人数"></subTitle>
              <ticketNumberPie :groupCount="sanke" :interCount="wangluo" :stayCount="canyinzhusu" :exCount="kapiao"
                :allTicketNumbers="allTicketNumbers" :groupCountRate="groupCountRate" :interCountRate="interCountRate"
                :stayCountRate="stayCountRate" :exCountrate="exCountrate"></ticketNumberPie>
            </div>
            <div class="passengers_number">
              <subTitle subTitle="游客规模"></subTitle>
              <div class="passengers_number_pies">
                <touristScale :sale1Revenue="scaleRevenueOne" :sale2Revenue="scaleRevenueTwo" :offlineRevenue="outLine"
                  :onlineRevenue="online" :totalsaleCount="totalsaleCount" :totalLine="totalLine"></touristScale>
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
            <div class="date_addr">
              <div>
                <el-date-picker v-model="value1" type="date" placeholder="选择日期" @change="chooseDate"> </el-date-picker>
              </div>
              <div>常州市金坛区</div>
            </div>
            <changzhouWeather :weather="weatherCondition" :temperatureMax="temperatureMax"
              :temperatureMin="temperatureMin" :aqi="AQI" :pm25="PM25" :humidity="humidity" :windDirection="windDirection"
              :windLevel="windLevel" :quality="quality" :qualityLevel="qualityLevel" :suggestion="suggestion">
            </changzhouWeather>
          </div>
          <div class="sales_box">
            <subTitle subTitle="渠道销售统计"></subTitle>
            <div class="sales_box_bar">
              <salesCount :salesWayName="areaNames" :salesWayData="areaDatas" :gridLeft_channel="gridLeft_channel"
                :gridRight_channel="gridRight_channel" :gridWidth_channel="gridWidth_channel"
                :yAxislabelMargin_channel="yAxislabelMargin_channel"
                :seriesLabelOffset_channel="seriesLabelOffset_channel"></salesCount>
            </div>
          </div>
          <div class="passengerSource_box">
            <subTitle subTitle="游客来源地"></subTitle>
            <div class="passengerSource">
              <passengerSource :xAxisData="cityNames" :seriesData="cityData"></passengerSource>
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
import revenueCom from '../components/revenueCom.vue' // 数据总览组件
import passagerAndRevenue from '../components/passengerAndRevenue.vue' // 数据分析组件
import hotelData from '../components/hotelData.vue' // 酒店数据
import dailyPassengerAndRevenue from '../components/dailyPassengerAndRevenue.vue' // 日客流量组件日营收组件
import changzhouMap from '../components/changzhouMap.vue' // 常州地图组件
import ticketNumberPie from '../components/ticketNumbers.vue' // 景区售票人数
import touristScale from '../components/touristScale.vue' // 游客规模
import changzhouWeather from '../components/changzhouWeather.vue' // 天气情况
import salesCount from '../components/salesCount.vue' // 销售渠道统计
import passengerSource from '../components/passengerSource.vue' // 游客来源地
import moment from 'moment'

import { getTotalData, getAnalyData, getPassengersData, getTicketsrsData, getTouristsData, getChannelData, getHotelData, getGoodWeather } from '../api/global.js'
import { removeAccessToken, removeAccessTokenExpiredTime } from '../utils/auth'
export default {
  name: 'changzhouScreen',
  components: {
    myLayout,
    subTitle,
    revenueCom,
    passagerAndRevenue,
    hotelData,
    dailyPassengerAndRevenue,
    changzhouMap,
    ticketNumberPie,
    touristScale,
    changzhouWeather,
    salesCount,
    passengerSource
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
      yesterdayDate: '', // 昨天的日期
      currentDate: '', //  现在的日期
      yearRevenueAmount: '0', // 整年总营收
      yearDiffRate: 0, // 年总营收上涨率
      monthRevenueAmount: '0', // 当月总营收
      monthDiffRate: 0, // 当月营收上涨率
      dayRevenueAmount: '0', // 当日营收
      dayDiffRate: 0, // 当日营收上涨率
      dayPersonCount: '', // 日人流量
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
      // 酒店数据
      canyinData: 0,
      kefangData: 0,
      qitaData: 0,
      totalRevenue: 0,
      canyinRate: 0,
      kefangRate: 0,
      qitaRate: 0,
      // 游客规模
      scaleRevenueOne: 0,
      scaleRevenueTwo: 0,
      outLine: 0,
      online: 0,
      totalsaleCount: 0,
      totalLine: 0,
      // 天气情况
      weatherCondition: '', // 天气情况 '晴朗'
      temperatureMax: '', // 最高气温
      temperatureMin: '', // 最高气温
      AQI: '',
      PM25: '',
      humidity: '', // 湿度
      windDirection: '', // 风向
      windLevel: '', // 风力等级
      quality: '', // 空气质量
      qualityLevel: '', // 空气质量等级
      suggestion: '', // 温馨提示
      // 数据分析样式
      gridLeft: '0%',
      gridRight: '6%',
      gridWidth: '85%',
      yAxislabelMargin: 10,
      seriesLabelOffset: [240, 0],
      // 数据来源
      cityNames: [],
      cityData: [],
      // 渠道销售统计样式
      gridLeft_channel: '0%',
      gridRight_channel: '5%',
      gridWidth_channel: '80%',
      yAxislabelMargin_channel: 10,
      seriesLabelOffset_channel: [230, 0]
    }
  },
  created () {
    // 清空上次的token
    removeAccessTokenExpiredTime()
    removeAccessToken()
    const yesDate = new Date().getTime() - 24 * 60 * 60 * 1000
    this.yesterdayDate = moment(yesDate).format('yyyy-MM-DD')
    const curDate = new Date().getTime()
    this.value1 = moment(yesDate).format('yyyy-MM-DD')
    this.currentDate = moment(curDate).format('YYYY-MM-DD HH:mm:ss')
    const that = this
    this.getAllData()
    setInterval(() => {
      const refresHours = new Date().getHours()
      console.log(refresHours, '刷新的时间')
      if (refresHours >= 10 && refresHours < 11) {
        const yesDate = new Date().getTime() - 24 * 60 * 60 * 1000
        this.yesterdayDate = moment(yesDate).format('yyyy-MM-DD')
        this.value1 = yesDate
        that.getAllData()
      } else if (refresHours >= 20 && refresHours < 21) {
        const yesDate = new Date().getTime() - 24 * 60 * 60 * 1000
        this.yesterdayDate = moment(yesDate).format('yyyy-MM-DD')
        this.value1 = yesDate
        that.getAllData()
      }
    }, 3600 * 1000)
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
      getTotalData(2, this.yesterdayDate)
        .then(res => {
          if (res) {
            console.log(res, '常州数据总览')
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
      getAnalyData(2, this.yesterdayDate)
        .then(res => {
          if (res) {
            // console.log(res, '常州数据分析')
            this.hotelNameArray = []
            this.flowData = []
            this.revenueData = []
            res.forEach(item => {
              this.hotelNameArray.push(item.companyName)
              this.flowData.push(item.dayCount)
              this.revenueData.push(Math.floor(item.dayRevenue))
            })
            // console.log(this.hotelNameArray, '新的分析数据1')
            // console.log(this.flowData, '新的分析数据2')
            // console.log(this.revenueData, '新的分析数据3')
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
      getPassengersData(2, this.yesterdayDate)
        .then(res => {
          if (res) {
            // console.log(res, '常州城市游客排行')
            res.forEach(item => {
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
      getTicketsrsData(2, this.yesterdayDate)
        .then(res => {
          if (res) {
            // console.log(res, '常州景区售票人数')
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
      getTouristsData(2, this.yesterdayDate)
        .then(res => {
          if (res) {
            // console.log(res, '常州游客规模')
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
      getChannelData(2, this.yesterdayDate)
        .then(res => {
          if (res) {
            // console.log(res, '常州渠道销售统计')
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
      getHotelData(2, this.yesterdayDate)
        .then(res => {
          if (res) {
            // console.log(res, '常州酒店数据')
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
      getGoodWeather('金坛')
        .then(res => {
          if (res) {
            // console.log(res.heWeather5[0], '金坛天气')
            this.weatherCondition = res.heWeather5[0].now.cond.txt
            this.temperatureMax = res.heWeather5[0].daily_forecast[0].tmp.max
            this.temperatureMin = res.heWeather5[0].daily_forecast[0].tmp.min
            this.AQI = res.heWeather5[0].aqi.city.aqi
            this.PM25 = res.heWeather5[0].aqi.city.pm25
            this.humidity = res.heWeather5[0].now.hum
            this.windDirection = res.heWeather5[0].now.wind.dir
            this.windLevel = res.heWeather5[0].now.wind.sc
            this.quality = res.heWeather5[0].aqi.city.pm10_iaqi
            this.qualityLevel = res.heWeather5[0].aqi.city.qlty
            this.suggestion = res.heWeather5[0].suggestion.trav.txt
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
    }
  }
}
</script>

<style lang="less" scoped>
.date_addr {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 26px;
  color: rgba(255, 255, 255, .6);

}

// 日期的样式

.content_left {
  width: 100%;
  height: 900px;
  margin-top: 29px;

  .total_data {
    margin-bottom: 25px;
    width: 100%;
    height: 316px;
  }

  .asys_data {
    margin-top: 30px;
    width: 100%;
    height: 303px;

    .passRevenue {
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }

  .hotel_data {
    width: 100%;
    height: 220px;

    .hote_data_com {
      margin-top: 35px;
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
    width: 100%;
    height: 610px;
    margin-top: -25px;
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
  margin-top: 29px;
  width: 100%;
  height: 800px;

  .weather_box {
    width: 100%;
    height: 340px;
  }

  .sales_box {
    width: 100%;
    height: 300px;

    .sales_box_bar {
      width: 100%;
      height: 230px;
      margin-top: 30px;
    }
  }

  .passengerSource_box {
    width: 100%;
    height: 260px;
  }

  .passengerSource {
    width: 100%;
    height: 260px;
  }
}</style>
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
</style>
