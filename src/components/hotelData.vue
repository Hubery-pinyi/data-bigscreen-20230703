<template>
  <div class="hotel_box">
    <div class="hotel_data">
      <p class="legend"><span class="hotel_name canyin"></span>餐饮 <span class="number">{{ canyin }}</span><span class="percent">{{ canyinRate }}%</span></p>
      <p class="legend"><span class="hotel_name kefang"></span>客房 <span class="number">{{ kefang }}</span> <span class="percent">{{ kefangRate }}%</span></p>
      <!-- <p class="legend"><span class="hotel_name huiyi"></span>会议<span class="number">45.67</span> <span class="percent">34%</span></p> -->
      <p class="legend"><span class="hotel_name qita"></span>其他 <span class="number"> {{ qita }}</span> <span class="percent">{{ qitaRate }}%</span></p>
      <!-- <p class="legend"><span class="hotel_name daishou"></span>代收 <span class="number">45.67</span> <span class="percent">34%</span></p> -->
    </div>
    <div class="hotel_pie">
      <div class="pie_box">
        <div class="center_font">
          <div class="font_box">
            <p>总营收</p>
            <p>{{ totalRevenue }}</p>
          </div>
        </div>
        <div class="canvas_box">
          <canvas id="canvasPie" width="160" height="160"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hotelData',
  props: {
    canyin: {
      type: Number,
      default: 0
    },
    kefang: {
      type: Number,
      default: 0
    },
    qita: {
      type: Number,
      default: 0
    },
    totalRevenue: {
      type: Number,
      default: 0
    },
    canyinRate: {
      type: Number,
      default: 0
    },
    kefangRate: {
      type: Number,
      default: 0
    },
    qitaRate: {
      type: Number,
      default: 0
    }

  },
  watch: {
    totalRevenue () {
      this.initHotelDataPie()
    }
  },
  data () {
    return {
      part: 3 // 饼图分成了几块
      // totalRevenue: 0,
      // canyinRate: 0,
      // kefangRate: 0,
      // qitaRate: 0
    }
  },
  created () {
    // this.totalRevenue = this.canyin + this.kefang + this.qita
    // console.log(this.totalRevenue, '总')
    // if (this.totalRevenue === 0) {
    // this.canyinRate = 0
    // this.canyinRate = 0
    // this.qitaRate = 0
    // } else {
    // this.canyinRate = (this.canyin * 100 / this.totalRevenue).toFixed(1)
    // this.kefangRate = (this.kefang * 100 / this.totalRevenue).toFixed(1)
    // this.qitaRate = (this.qita * 100 / this.totalRevenue).toFixed(1)
    // }
  },
  mounted () {

  },
  methods: {
    initHotelDataPie () {
      const border = 360 * 0.01
      const canyinPercent = +(this.canyin / (this.canyin + this.kefang + this.qita)) * (360 - border * this.part)
      const kefangPercent = +(this.kefang / (this.canyin + this.kefang + this.qita)) * (360 - border * this.part)
      const qitaPercent = +(this.qita / (this.canyin + this.kefang + this.qita)) * (360 - border * this.part)
      // 顺序不可变
      const canyinAngle = canyinPercent // 餐饮
      const canyinAngleborder = canyinAngle + border
      const kefangAngle = canyinAngleborder + kefangPercent // 客房
      const kefangAngleborder = kefangAngle + border
      const qitaAngle = kefangAngleborder + qitaPercent
      const qitaAngleborder = qitaAngle + border

      console.log(canyinAngle, kefangAngle, qitaAngle)

      const context = document.getElementById('canvasPie').getContext('2d')
      // 餐饮
      context.moveTo(80, 80)
      context.arc(80, 80, 80, -90 * Math.PI / 180, (canyinAngle - 90) * Math.PI / 180, false)
      context.closePath()
      context.fillStyle = 'rgba(253, 139, 36)'
      context.fill()
      // 餐饮border
      context.beginPath()
      context.moveTo(80, 80)
      context.arc(80, 80, 80, (canyinAngle - 90) * Math.PI / 180, (canyinAngleborder - 90) * Math.PI / 180, false)
      context.closePath()
      context.fillStyle = 'rgba(11, 22, 36)'
      context.fill()
      // 客房
      context.beginPath()
      context.moveTo(80, 80)
      context.arc(80, 80, 76, (canyinAngleborder - 90) * Math.PI / 180, (kefangAngle - 90) * Math.PI / 180, false)
      context.closePath()
      context.strokeStyle = 'rgba(11, 22, 36)'
      context.lineWidth = 4
      context.stroke()
      context.fillStyle = 'rgba(30, 191, 13)'
      context.fill()
      // 客房border
      context.beginPath()
      context.moveTo(80, 80)
      context.arc(80, 80, 80, (kefangAngle - 90) * Math.PI / 180, (kefangAngleborder - 90) * Math.PI / 180, false)
      context.closePath()
      context.fillStyle = 'rgba(11, 22, 36)'
      context.fill()
      // 其他
      context.beginPath()
      context.moveTo(80, 80)
      context.arc(80, 80, 76, (kefangAngleborder - 90) * Math.PI / 180, (qitaAngle - 90) * Math.PI / 180, false)
      context.closePath()
      context.fillStyle = 'rgba(1, 120, 255, 1)'
      context.fill()
      // 其他border
      context.beginPath()
      context.moveTo(80, 80)
      context.arc(80, 80, 76, (qitaAngle - 90) * Math.PI / 180, (qitaAngleborder - 90) * Math.PI / 180, false)
      context.closePath()
      context.fillStyle = 'rgba(11, 22, 36)'
      context.fill()
      // 圆形
      context.beginPath()
      context.moveTo(80, 80)
      context.arc(80, 80, 35, 0 * Math.PI / 180, 360 * Math.PI / 180, false)
      context.closePath()
      context.fillStyle = 'rgba(11, 22, 36)'
      context.fill()
    }
  }

}
</script>

<style lang="less" scoped>
.hotel_box {
  display: flex;
  margin-top: 15px;
  width: 100%;
  height: 262px;

  .hotel_data {
    flex: 1;
    margin-top: 20px;

    .legend {
      line-height: 50px;
      font-size: 13px;
      margin-left: 9px;
      color: rgba(0, 218, 216, 1);

      .hotel_name {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-right: 5px;
        border-radius: 50%;
      }

      .canyin {
        background-color: rgba(255, 174, 2, 1);
      }

      .kefang {
        background-color: rgba(73, 247, 12, 1);
      }

      // .huiyi {
        // background-color: rgba(1, 115, 255, 1);
      // }

      .qita {
        background-color: rgba(1, 120, 255, 1);
      }

      // .daishou {
        // background-color: rgba(16, 250, 244, 1);
      // }

      .number,
      .percent {
        margin-left: 10px;
        color: rgba(255, 255, 255, .7);
      }
    }

  }

  .hotel_pie {
    flex: 1;
    display: flex;
    justify-content: center;

    .pie_box {
      margin-top: 5px;
      width: 160px;
      height: 160px;

      .center_font {
        position: absolute;
        float: left;
        text-align: center;
        width: 160px;
        height: 160px;

        .font_box {
          margin-top: 60px;
          width: 160px;
          height: 160px;

          p:nth-child(1) {
            color: rgba(0, 218, 216, .8);
            font-size: 13px;
          }

          p:nth-child(2) {
            color: rgba(255, 255, 255, .8);
            font-size: 13px;
          }
        }
      }

      .canvas_box {
        width: 160px;
        height: 160px;
      }
    }
  }
}</style>
