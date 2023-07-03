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
          <div class="hotel_data">
            <subTitle subTitle="酒店数据"></subTitle>
            <div class="hote_data_com">
              <hotelData></hotelData>
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
            <changzhouMap></changzhouMap>
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
            <changzhouWeather></changzhouWeather>
          </div>
          <div class="sales_box">
            <subTitle subTitle="渠道销售统计"></subTitle>
            <div class="sales_box_bar">
              <salesCount :salesWayName="areaNames" :salesWayData="areaDatas"></salesCount>
            </div>
          </div>
          <div class="passengerSource_box">
            <subTitle subTitle="游客来源地"></subTitle>
            <div class="passengerSource">
              <passengerSource></passengerSource>
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
import revenueCom from '../components/revenueCom.vue' // 数据总览组件
import passagerAndRevenue from '../views/groupComponents/passengerAndRevenue.vue' // 数据分析组件
import hotelData from '../components/hotelData.vue' // 酒店数据
import dailyPassengerAndRevenue from '../components/dailyPassengerAndRevenue.vue' // 日客流量组件日营收组件
import changzhouMap from '../components/changzhouMap.vue' // 常州地图组件
import ticketNumberPie from '../components/ticketNumbers.vue' // 景区售票人数
import touristScale from '../components/touristScale.vue' // 游客规模
import changzhouWeather from '../components/changzhouWeather.vue' // 天气情况
import salesCount from '../components/salesCount.vue' // 销售渠道统计
import passengerSource from '../components/passengerSource.vue'
export default {
  name: 'changzhouScreen',
  components: {
    pageLayout, subTitle, revenueCom, passagerAndRevenue, hotelData, dailyPassengerAndRevenue, changzhouMap, ticketNumberPie, touristScale, changzhouWeather, salesCount, passengerSource
  },
  data () {
    return {
      // 数据分析
      hotelNameArray: ['森林世界景区', '深林世界酒店', '恐龙度假酒店'],
      flowData: [120, 120, 120],
      revenueData: [67, 67, 67],
      // 渠道销售统计
      areaNames: ['江苏门市', '江苏抖音自产', '江苏OTA', '江苏渠道', '江苏商拓'],
      areaDatas: [650, 919, 907, 721, 567]
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
    height: 540px;
    margin-bottom: 15px;
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
