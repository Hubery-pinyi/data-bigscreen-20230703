<template>
  <div class="weather_box">
    <div class="date_add">
      <div>{{ date }}</div>
      <div>{{ address }}</div>
    </div>
    <div class="weather_detail">
      <div class="weather_icon">
        <img v-if="weatherType === '晴'" src="../assets/images/weather/晴天@2x.png" alt="">
        <img v-else-if="weatherType.includes('雨')" src="../assets/images/weather/小雨@2x.png" alt="">
        <img v-else-if="weatherType.includes('雪')" src="../assets/images/weather/雪@2x.png" alt="">
        <img v-else-if="weatherType.includes('雾')" src="../assets/images/weather/大雾@2x.png" alt="">
        <img v-else-if="weatherType.includes('冰雹')" src="../assets/images/weather/冰雹@2x.png" alt="">
        <img v-else-if="weatherType.includes('风')" src="../assets/images/weather/大风@2x.png" alt="">
        <img v-else-if="weatherType.includes('雷')" src="../assets/images/weather/雷雨@2x.png" alt="">
        <img v-else src="../assets/images/weather/晴转多云@2x.png" alt="">
      </div>
      <div class="weather_temp">
        <div class="tempture">{{ tempture }}°</div>
        <div class="tempture_width">{{ temptureMIn }}-{{ temptureMax }} °C {{ weatherType }}</div>
      </div>
      <div class="icon_mod">
        <div class="icon_mod_ic">
          <img src="../assets/images/ic_tq_aq@2x.png" alt="">
        </div>
        <div class="icon_mod_font">AQI</div>
        <div class="icon_mod_number">{{ aqi }}</div>
      </div>
      <div class="icon_mod">
        <div class="icon_mod_ic">
          <img src="../assets/images/形状@2x.png" alt="">
        </div>
        <div class="icon_mod_font">PM2.5</div>
        <div class="icon_mod_number">{{ PM25 }}</div>
      </div>
      <div class="icon_mod">
        <div class="icon_mod_ic">
          <img src="../assets/images/ic_tq_sd@2x.png" alt="">
        </div>
        <div class="icon_mod_font">湿度</div>
        <div class="icon_mod_number"> {{ wetness }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'groupWeather',
  props: {
    date: {
      type: String,
      default: '2023-02-23'
    },
    address: {
      type: String,
      default: '常州市金坛区'
    },
    tempture: {
      type: String,
      default: '26'
    },
    temptureMax: {
      type: String,
      default: '30'
    },
    temptureMIn: {
      type: String,
      default: '10'
    },
    weatherType: {
      type: String,
      default: '晴'
    },
    aqi: {
      type: String,
      default: '84'
    },
    PM25: {
      type: String,
      default: '6'
    },
    wetness: {
      type: String,
      default: '20'
    }

  }

}
</script>

<style lang="less" scoped>
.weather_box {
  width: 100%;
  height: 100%;

  .date_add {
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: 14px;
    opacity: 0.6;
    margin-top: 20px;
  }

  .weather_detail {
    display: flex;
    justify-content: flex-start;
    margin-top: 18px;
    width: 100%;
    height: 85px;
    border: 0.5px solid rgba(0, 218, 216, 0.20);

    .weather_icon {
      width: 85px;
      border-right: 1px solid rgba(0, 218, 216, 0.20);
      background: linear-gradient(145deg, rgba(3, 225, 223, 0), rgba(0, 218, 216, 0.10));
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 40px;
        height: 40px;

      }

    }

    .weather_temp {
      width: 154px;
      border-right: 1px solid rgba(0, 218, 216, 0.20);

      .tempture {
        height: 52px;
        font-size: 32px;
        line-height: 52px;
        padding-left: 14px;
        color: rgba(255, 255, 255, .8);
        border-bottom: 1px solid rgba(0, 218, 216, 0.2);
      }

      .tempture_width {
        line-height: 32px;
        padding-left: 14px;
        font-size: 13px;
        color: rgba(255, 255, 255, .6);
      }
    }

    .icon_mod {
      flex: 1;
      opacity: 80%;

      .icon_mod_ic {
        height: 31px;
        text-align: center;
        padding-top: 12px;

        img {
          width: 14px;
          height: 18px;
        }
      }

      .icon_mod_font {
        text-align: center;
        font-size: 12px;
        transform: scale(0.8);
        padding-top: 5px;
        color: rgba(255, 255, 255, .8);
      }

      .icon_mod_number {
        text-align: center;
        line-height: 32px;
        font-size: 18px;
        color: rgba(255, 255, 255);
      }
    }

  }

}
</style>
