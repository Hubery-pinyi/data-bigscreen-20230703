<template>
  <div>
    <pageLayout>
      <template v-slot:content_main_left>
        <div class="content_left">
          <div class="total_data">
            <subTitle subTitle="数据总览"></subTitle>
            <revenueCom totalRevenue="20000" totalPercent="30%" monthRevenue="30000" monthPercent="30%"
              dailyRevenue="40000" dailyPercent="30%"></revenueCom>
          </div>
          <div class="asys_data">
            <subTitle subTitle="数据分析"></subTitle>
            <div class="passRevenue">
              <passagerAndRevenue :yAxisData="hotelNameArray" :serieFlowData="flowData" :seriesRevenueData="revenueData">
              </passagerAndRevenue>
            </div>
          </div>

        </div>
      </template>

      <template v-slot:content_main_middle>
        <div class="content_middle">
          <div class="table_box">
            <div class="table_box_data">
              <div class="table_box_left">
                <dailyPassengerAndRevenue dailyNumber="200000" dailyFont="日客流量"></dailyPassengerAndRevenue>
              </div>
              <div class="table_box_right">
                <dailyPassengerAndRevenue dailyNumber="233300000" dailyFont="日营收"></dailyPassengerAndRevenue>
              </div>
            </div>
          </div>
          <div class="map_box">
            <hangzhouMap></hangzhouMap>
          </div>
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
        </div>
      </template>
      <template v-slot:content_main_right>
        <div class="content_right">
          <div class="weather_box">
            <subTitle subTitle="天气情况"></subTitle>
            <weather date="2023-05-16" address="常州市金坛区" tempture="30" temptureRange="19-28" weatherType="晴朗" aqi="90"
              PM25="5" wetness="24"></weather>

          </div>
          <div class="sales_box">
            <subTitle subTitle="渠道销售统计"></subTitle>
            <div class="sales_box_bar">
              <salesCount :salesWayName="areaNames" :salesWayData="areaDatas" ></salesCount>
            </div>
          </div>
          <div class="passengerSource_box">
            <subTitle subTitle="游客来源地"></subTitle>
            <div class="passengerSource">
              <passengerSource></passengerSource>
            </div>
          </div>
          <div class="hotel_box">
            <subTitle subTitle="酒店数据"></subTitle>
            <div class="hotelData">
              <hotelData></hotelData>
            </div>
          </div>

        </div>
      </template>
    </pageLayout>
  </div>
</template>

<script>
import pageLayout from '../components/pageLayout/myIndex.vue' // 框架模板
import subTitle from '../components/subTitle.vue' // 小标题组件
import dailyPassengerAndRevenue from '../components/dailyPassengerAndRevenue.vue' // 日客流量组件日营收组件
import hangzhouMap from '../components/hangzhouMap.vue' // 常州地图组件
import ticketNumberPie from '../components/ticketNumbers.vue' // 景区售票人数
import touristScale from '../components/touristScale.vue' // 游客规模
import revenueCom from '../components/revenueCom.vue' // 数据总览
import passagerAndRevenue from '../views/groupComponents/passengerAndRevenue.vue' // 数据分析组件
import weather from '../components/groupWeather.vue' // 天气组件(和集团页面公用)
import salesCount from '../components/salesCount.vue' // 销售渠道统计组件
import passengerSource from '../components/passengerSource.vue' // 游客来源地组件
import hotelData from '../components/hotelData.vue'
export default {
  name: 'changzhouScreen',
  components: {
    pageLayout, subTitle, dailyPassengerAndRevenue, hangzhouMap, ticketNumberPie, touristScale, revenueCom, passagerAndRevenue, weather, salesCount, passengerSource, hotelData
  },
  data () {
    return {
      // 数据分析
      hotelNameArray: ['云上草原景区', '云上草原商管', '星空酒店', '云景度假酒店', '松鼠酒店', '半山隐竹酒店', '凉源峡漂流', '杭州冰雪体育'],
      flowData: [120, 120, 120, 120, 120, 120, 120, 120],
      revenueData: [67, 67, 67, 67, 67, 67, 67, 67],
      // 渠道销售统计
      areaNames: ['浙江门市', '抖音', '小红·猪', '浙江OTA', '浙江渠道', '浙江商拓', '快点自驾'],
      areaDatas: [650, 919, 907, 721, 567, 362, 297],
      labelWidth: [320, 0]
    }
  },
  mounted () {

  }

}
</script>

<style lang="less" scoped>
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
    width: 100%;
    height: 540px;
    margin-bottom: 25px;
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
