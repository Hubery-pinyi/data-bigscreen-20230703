<template>
  <div class="weather_box">
    <!-- <div class="date_addr"> -->
      <!-- <div>{{ date }}</div> -->
      <!-- <div>常州市金坛区</div> -->
    <!-- </div> -->
    <div class="temp_PM">
      <div class="tempture">
        <div class="temp_name">温度</div>
        <div class="temp_ico">
          <img v-if="weather==='晴'" src="../assets/images/weather/晴天@2x.png" alt="">
          <img v-else-if="weather.includes('多云')" src="../assets/images/weather/多云@2x.png" alt="">
          <img v-else-if="weather.includes('雨')" src="../assets/images/weather/小雨@2x.png" alt="">
          <img v-else-if="weather.includes('雪')" src="../assets/images/weather/雪@2x.png" alt="">
          <img v-else-if="weather.includes('雾')" src="../assets/images/weather/大雾@2x.png" alt="">
          <img v-else-if="weather.includes('冰雹')" src="../assets/images/weather/冰雹@2x.png" alt="">
          <img v-else-if="weather.includes('风')" src="../assets/images/weather/大风@2x.png" alt="">
          <img v-else-if="weather.includes('雷')" src="../assets/images/weather/雷雨@2x.png" alt="">
          <img v-else src="../assets/images/weather/晴转多云@2x.png" alt="">
        </div>
        <div class="temp_sun">{{ weather }}</div>
        <div class="temp_tem">17-28 <span>°C</span></div>

      </div>
      <div class="pm_same">
        <div class="same_name">湿度</div>
        <div class="same_ico">
          <div class="same_ico_box">
            <img src="../assets/images/jiangsu/ic_tq_sd@2x.png" alt="">
          </div>

        </div>
        <div class="same_tem">{{ humidity }} <span>AN</span></div>
      </div>
      <div class="pm_same">
        <div class="same_name">PM2.5</div>
        <div class="same_ico">
          <div class="same_ico_box">
            <img src="../assets/images/jiangsu/ic_tq_pm@2x.png" alt="">
          </div>
        </div>
        <div class="same_tem">{{ pm25 }} <span>MI</span></div>
      </div>
      <div class="pm_same">
        <div class="same_name">风速</div>
        <div class="same_ico">
          <div class="same_ico_box">
            <img src="../assets/images/jiangsu/ic_tq_f@2x.png" alt="">
          </div>
        </div>
        <div class="same_tem">{{ windDirection }} <span>{{ windLevel }}级</span></div>
      </div>

    </div>
    <div class="airQuality">
      <div class="airQuality_left">
        <div class="airQuality_left_img">
          <img src="../assets/images/jiangsu/ic_tq_y@2x.png" alt="">
        </div>

        <div class="airQuality_left_font">AQI</div>
      </div>
      <div class="airQuality_right">
        <div class="airQuality_right_font">
          <span>{{ quality }}</span> <span>{{ qualityLevel }}</span> <span class="suggestion"></span>
        </div>
        <div class="airQuality_right_bar_box" >
          <div class="airQuality_right_bar">
            <div class="airQuality_right_bar_bg">
              <div class="airQuality_right_show" :style="{width:quality}"></div>
            </div>
          </div>
          <ul class="airQuality_right_bar_degree">
            <li>0</li>
            <li>60</li>
            <li>120</li>
            <li>180</li>
            <li>240</li>
            <li>300</li>
          </ul>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'changzhouWeather',
  props: {
    loaction: {
      type: String,
      default: '常州市金坛区'
    },
    // date: {
    // type: String,
    // default: '2023-5-25'
    // },
    weather: {
      type: String,
      default: '晴'
    },
    temperatureMax: {
      type: String,
      default: '15'
    },
    temperatureMin: {
      type: String,
      default: '30'
    },
    aqi: {
      type: String,
      default: '30'
    },
    pm25: {
      type: String,
      default: '20'
    },
    humidity: {
      type: String,
      default: '35'
    },
    windDirection: {
      type: String,
      default: '东南风'
    },
    windLevel: {
      type: String,
      default: '4'
    },
    quality: {
      type: String,
      default: '45'
    },
    qualityLevel: {
      type: String,
      default: '优'
    },
    suggestion: {
      type: String,
      default: '温馨提示'
    }

  },
  data () {
    return {
      widthDegree: '60px' // 总长度为300px
    }
  },
  mounted () {

  }

}
</script>

<style lang="less" scoped>
.weather_box {
  width: 100%;

  .date_addr {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 26px;
    color: rgba(255, 255, 255, .6);
  }

  .temp_PM {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 94px;

    .tempture {
      width: 85px;
      height: 115px;
      text-align: center;
      background: rgba(219, 255, 255, 0.05);
      border-radius: 2px;
      border: 1px solid rgba(219, 255, 255, 0.05);

      .temp_name {
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        color: rgba(255, 255, 255, .8);
        background: rgba(0, 218, 216, 0.1);
        box-shadow: inset 0px 0px 6px 0px rgba(0, 218, 216, 0.2);
        border-radius: 2px;
        border: 1px solid rgba(0, 218, 216, 0.1);
      }

      .temp_ico {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 8px;

        img {
          width: 22px;
          height: 22px;
        }
      }

      .temp_sun {
        font-size: 10px;
        margin-bottom: 4px;
        color: rgba(255, 255, 255, .8);
      }

      .temp_tem {
        font-size: 10px;
        color: rgba(0, 218, 216, 1);

        span {
          color: rgba(242, 255, 250, .8);
        }
      }
    }

    .pm_same {
      width: 85px;
      height: 115px;
      text-align: center;
      background: rgba(219, 255, 255, 0.05);
      border-radius: 2px;
      border: 1px solid rgba(219, 255, 255, 0.05);

      .same_name {
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        color: rgba(255, 255, 255, .8);
        background: rgba(0, 218, 216, 0.1);
        box-shadow: inset 0px 0px 6px 0px rgba(0, 218, 216, 0.2);
        border-radius: 2px;
        border: 1px solid rgba(0, 218, 216, 0.1);
      }

      .same_ico {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        margin-bottom: 10px;

        .same_ico_box {
          width: 40px;
          border-bottom: 2px solid rgba(0, 218, 216, .2);

          img {
            width: 18px;
            height: 24px;
            margin-bottom: 10px;
          }
        }

      }

      .same_tem {
        font-size: 10px;
        color: rgba(0, 218, 216, 1);

        span {
          color: rgba(242, 255, 250, .8);
        }
      }
    }

  }

  .airQuality {
    display: flex;
    width: 100%;
    height: 62px;
    margin-top: 50px;

    .airQuality_left {
      width: 62px;
      height: 100%;
      background: rgba(219, 255, 255, 0.05);
      border-radius: 2px;
      border: 1px solid rgba(0, 218, 216, 0.2);

      .airQuality_left_img {
        height: 42px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 24px;
          height: 17px;
        }
      }

      .airQuality_left_font {
        height: 22px;
        font-size: 10px;
        line-height: 22px;
        color: rgba(255, 255, 255, .6);
        text-align: center;
        background: rgba(0, 218, 216, 0.05);
        border-radius: 2px;
      }

    }

    .airQuality_right {
      flex: 1;
      height: 62px;
      margin-left: 12px;

      span:nth-child(1) {
        font-size: 17px;
        line-height: 24px;
        font-weight: 600;
        color: rgba(0, 218, 216, 1);
      }

      span:nth-child(2) {
        display: inline-block;
        font-size: 10px;
        text-align: center;
        line-height: 15px;
        width: 24px;
        height: 15px;
        margin-left: 5px;
        margin-right: 5px;
        border-radius: 3px;
        background-color: rgba(0, 218, 216, .8);
      }

      span:nth-child(3) {
        font-size: 10px;
        line-height: 24px;
        font-weight: 400;
        letter-spacing: 1px;
        color: rgba(255, 255, 255, .8);
      }
      .suggestion{
        // white-space: nowrap;
        overflow: hidden;
      }
      .airQuality_right_bar{
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 26px;
        border-radius: 3px;
        border: 1px solid rgba(219, 255, 255, 0.05);
        .airQuality_right_bar_bg{
          width: 90%;
          height: 4px;
          line-height: 26px;
          border-radius: 2px;
          background-color: rgba(219, 255, 255, 0.10);
          .airQuality_right_show{
            height: 4px;
            width: 50px;
            border-radius: 2px;
            background: linear-gradient(to right,rgba(0, 239, 238, 1) ,rgba(245, 179, 110, 1));
          }
        }

      }
      .airQuality_right_bar_degree{
        display: flex;
        list-style: none;
        justify-content: space-around;
        li{
          font-size: 7px;
          color: rgba(219, 255, 255, 0.10);
        }
      }
    }
  }
}
</style>
