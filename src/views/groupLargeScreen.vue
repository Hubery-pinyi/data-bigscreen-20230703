<template>
  <div>
    <pageLayout>
      <!-- 左侧部分-->
      <template v-slot:content_main_left>
        <div class="total_data">
          <subTitle subTitle="数据总览"></subTitle>
          <!-- 营收数据--revenueCom组件 -->
          <revenueCom></revenueCom>
        </div>
        <div class="asys_data">
          <subTitle subTitle="数据分析"></subTitle>
          <!-- 数据分析组件 -->
          <passagerAndRevenue :yAxisData="hotelNameArray" :serieFlowData="flowData" :seriesRevenueData="revenueData"></passagerAndRevenue>
        </div>
      </template>

      <!-- 中间部分 -->
      <template v-slot:content_main_middle>
        <div class="threeTable_box">
          <div class="threeTable_left">
            <barOfArea></barOfArea>
          </div>

          <div class="threeTable_middle">
            <dailyPassengerAndRevenue dailyNumber="238,486,67" dailyFont="日客流量"></dailyPassengerAndRevenue>
          </div>

          <div class="threeTable_right">
            <dailyPassengerAndRevenue dailyNumber="840,324,51" dailyFont="日营收"></dailyPassengerAndRevenue>
          </div>
        </div>

        <!-- 动态地图 -->
        <div class="map_box">
          <groupMap></groupMap>
        </div>
        <!-- 饼图 -->
        <div class="pie_box">
          <div class="tickets_number">
            <subTitle subTitle="景区售票人数"></subTitle>
            <ticketNumberPie allTicketNumbers="123456789"></ticketNumberPie>
          </div>
          <div class="passengers_number">
            <subTitle subTitle="游客规模"></subTitle>
            <div class="passengers_number_pies">
              <touristScale></touristScale>
            </div>

          </div>
        </div>
      </template>

      <!-- 右侧部分 -->
      <template v-slot:content_main_right>
        <div class="weather_box">
          <subTitle subTitle="天气情况"></subTitle>
          <groupWeather date="2023-05-16" address="常州市金坛区" tempture="30" temptureRange="19-28" weatherType="晴朗" aqi="90" PM25="5" wetness="24"></groupWeather>
        </div>
        <div class="sales_box">
          <subTitle subTitle="渠道销售统计"></subTitle>
          <salesCount :salesWayName="areaNames" :salesWayData="areaDatas"></salesCount>
        </div>
        <div class="hotel_box">
          <subTitle subTitle="酒店数据"></subTitle>
          <hotelData></hotelData>
        </div>
      </template>

    </pageLayout>
  </div>
</template>

<script>
import pageLayout from '../components/pageLayout/myIndex.vue'
import subTitle from '../components/subTitle.vue' // 小标题
import revenueCom from '../components/revenueCom.vue' // 数据总览
import passagerAndRevenue from '../views/groupComponents/passengerAndRevenue.vue' // 数据分析组件
import groupWeather from '../components/groupWeather.vue' // 天气
import salesCount from '../components/salesCount.vue' // 渠道销售统计
import hotelData from '../components/hotelData.vue' //  酒店数据
import barOfArea from '../components/barOfArea.vue' // 地区数据(只有集团页面有)
import dailyPassengerAndRevenue from '../components/dailyPassengerAndRevenue.vue' // 日客流量 日营收组件
import groupMap from '../components/groupMapCom.vue' // 地图组件
import ticketNumberPie from '../components/ticketNumbers.vue' // 景区售票人数
import touristScale from '../components/touristScale.vue' // 游客规模

export default {
  name: 'groupLargeScreen',
  components: {
    pageLayout, subTitle, revenueCom, passagerAndRevenue, groupWeather, salesCount, hotelData, barOfArea, dailyPassengerAndRevenue, groupMap, ticketNumberPie, touristScale
  },
  data () {
    return {
      // 数据分析
      hotelNameArray: ['恐龙度假酒店', '深林世界酒店', '森林世界景区', '杭州冰雪体育', '凉源峡漂流', '半山隐竹酒店', '松鼠酒店', '云景度假酒店', '星空酒店', '云上草原商管', '云上草原景区'],
      flowData: [120, 100, 110, 105, 90, 120, 120, 80, 120, 100, 120],
      revenueData: [55, 67, 76, 45, 44, 77, 67, 49, 56, 54, 60],
      // 销售渠道统计
      areaNames: ['江苏商拓', '江苏渠道', '江苏OTA', '江苏抖音自产', '江苏门市', '快点自驾', '浙江商拓', '浙江渠道', '浙江OTA', '小红·猪', '抖音', '浙江门市'],
      areaDatas: [362, 567, 721, 907, 919, 650, 362, 567, 721, 907, 919, 650]

    }
  }

}
</script >

<style lang="less" scoped>
//左边数据 总览
.total_data {
  width: 100%;
  height: 332px;
}

.asys_data {
  width: 100%;
  height: 680px;
}

// 中间数据
.threeTable_box {
  display: flex;
  justify-content: flex-start;
  width: 773px;
  height: 195px;

  .threeTable_left {
    width: 170px;
    height: 178px;
    background: url('../assets/images/bj_tb_d@2x.png') no-repeat center center;
    background-size: cover;
  }

  .threeTable_middle {
    width: 271px;
    height: 97px;
    margin-left: 19px;
    margin-right: 19px;
    background: url('../assets/images/bj_kl@2x.png') no-repeat center center;
    background-size: cover;
  }

  .threeTable_right {
    width: 271px;
    height: 97px;
    background: url('../assets/images/bj_kl@2x.png') no-repeat center center;
    background-size: cover;
  }
}
// 地图的box
.map_box {
  margin-top: -50px;
  margin-bottom: 40px;
  width: 100%;
  height: 540px;

}
.pie_box {
  width: 100%;
  height: 268px;
}

.weather_box {
  width: 100%;
  height: 207px;
}

.sales_box {
  width: 100%;
  height: 520px;
}

.hotel_box {
  width: 100%;
  height: 268px;
}

// 中部 饼图--------
.pie_box {
  display: flex;
  justify-content: space-between;

  .tickets_number {
    flex: 3;
  }

  .passengers_number {
    flex: 5;
  }

}
</style>
