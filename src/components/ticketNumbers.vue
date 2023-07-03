<template>
  <div class="num_box">
    <!-- 图例 -->
    <div class="num">
      <div class="blue">
        <p><span class="num_blue"></span> 散客类</p>
        <p class="num_value">{{ groupCount }}<span class="blue_perc">{{ groupCountRate }}%</span></p>
      </div>
      <div class="orange">
        <p><span class="num_orange"></span> 卡票类</p>
        <p class="num_value">{{ exCount }} <span class="orange_perc">{{  exCountrate }}%</span></p>
      </div>
      <div class="blue">
        <p><span class="num_blue wangluo"></span> 网络</p>
        <p class="num_value">{{ interCount }} <span class="blue_perc wangluo_font">{{ interCountRate }}%</span></p>
      </div>
      <div class="orange">
        <p><span class="num_orange canyin"></span> 餐饮住宿</p>
        <p class="num_value">{{ stayCount }} <span class="orange_perc canyin_font">{{  stayCountRate }}%</span></p>
      </div>
    </div>
    <!-- 饼图 -->
    <div class="pie">
      <div class="tic_pie_box">
        <div class="center_font">
          <div class="font_box">
            <p>总售票</p>
            <p>{{ allTicketNumbers }}</p>
          </div>
        </div>
        <div class="canvas_box">
          <canvas id="tic_pie" width="142" height="142">
            您的浏览器版本过低,不支持canvas,请升级浏览器或使用chrome浏览器
          </canvas>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ticketNumber',
  props: {
    groupCount: {
      type: Number,
      default: 0
    },
    interCount: {
      type: Number,
      default: 0
    },
    stayCount: {
      type: Number,
      default: 0
    },
    exCount: {
      type: Number,
      default: 0
    },
    allTicketNumbers: {
      type: Number,
      default: 0
    },
    groupCountRate: {
      type: Number,
      default: 0
    },
    interCountRate: {
      type: Number,
      default: 0
    },
    stayCountRate: {
      type: Number,
      default: 0
    },
    exCountrate: {
      type: Number,
      default: 0
    }

  },
  watch: {
    allTicketNumbers () {
      this.initTicketsPie()
    }
  },
  data () {
    return {
      // allTicketNumbers: 0 // 总售票
      // groupCountRate: 0,
      // interCountRate: 0,
      // : 0,
      // exCountrate: 0
    }
  },
  created () {
    // this.allTicketNumbers = this.groupCount + this.interCount + this.stayCount + this.exCount
    // if (this.allTicketNumbers === 0) {
    // this.groupCountRate = 0
    // this.interCountRate = 0
    // this.stayCountRate = 0
    // this.exCountrate = 0
    // } else {
    // this.groupCountRate = (this.interCount * 100 / this.allTicketNumbers).toFixed(1)
    // this.interCountRate = (this.groupCount * 100 / this.allTicketNumbers).toFixed(1)
    // this.stayCountRate = (this.stayCount * 100 / this.allTicketNumbers).toFixed(1)
    // this.exCountrate = (this.exCount * 100 / this.allTicketNumbers).toFixed(1)
    // }
  },
  mounted () {
    this.initTicketsPie()
  },
  methods: {
    initTicketsPie () {
      const orangeRate = this.exCount * 360 / (+this.allTicketNumbers)
      const skyblueRate = this.groupCount * 360 / (+this.allTicketNumbers)
      const blueRate = this.stayCount * 360 / (+this.allTicketNumbers)
      const greenRate = this.interCount * 360 / (+this.allTicketNumbers)
      // 顺序不可变
      const orangeRateAngle = orangeRate
      const skyblueRateAngle = orangeRateAngle + skyblueRate
      const blueRateAngle = skyblueRateAngle + blueRate
      const greenRateAngle = blueRateAngle + greenRate
      console.log(orangeRateAngle, skyblueRateAngle, blueRateAngle, greenRateAngle, '角度')
      const context = document.getElementById('tic_pie').getContext('2d')
      // 黄色外1
      context.moveTo(71, 71)
      context.arc(71, 71, 71, Math.PI / 180 * 0, Math.PI / 180 * orangeRateAngle, false)
      context.closePath()
      context.fillStyle = 'rgba(253, 139, 36,1)'
      context.fill()
      // 天蓝色外1
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 71, Math.PI / 180 * orangeRateAngle, Math.PI / 180 * skyblueRateAngle, false)
      context.closePath()
      context.strokeStyle = 'rgba(10, 23, 35)'
      context.lineWidth = 8
      context.stroke()
      context.fillStyle = 'rgba(2, 216, 216, 1)'
      context.fill()
      // 蓝色外1
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 71, Math.PI / 180 * skyblueRateAngle, Math.PI / 180 * blueRateAngle, false)
      context.closePath()
      context.strokeStyle = 'rgba(10, 23, 35)'
      context.lineWidth = 8
      context.stroke()
      context.fillStyle = 'rgba(1, 120, 255, 1)'
      context.fill()
      // 绿色外1
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 71, Math.PI / 180 * blueRateAngle, Math.PI / 180 * greenRateAngle, false)
      context.closePath()
      context.strokeStyle = 'rgba(10, 23, 35)'
      context.lineWidth = 8
      context.stroke()
      context.fillStyle = 'rgba(44, 210, 14, 1)'
      context.fill()

      // 黑色圆外1
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 62, Math.PI / 180 * 0, Math.PI / 180 * 360)
      context.closePath()
      context.fillStyle = 'rgba(10, 23, 35)'
      context.fill()

      // 黄色外2
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 59, Math.PI / 180 * 0, Math.PI / 180 * orangeRateAngle, false)
      context.closePath()
      context.fillStyle = 'rgba(253, 139, 36,.4)'
      context.fill()

      // 天蓝色外2
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 59, Math.PI / 180 * orangeRateAngle, Math.PI / 180 * skyblueRateAngle, false)
      context.closePath()
      context.strokeStyle = 'rgba(10, 23, 35)'
      context.lineWidth = 8
      context.stroke()
      context.fillStyle = 'rgba(2, 216, 216, .4)'
      context.fill()
      // 蓝色外2
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 59, Math.PI / 180 * skyblueRateAngle, Math.PI / 180 * blueRateAngle, false)
      context.closePath()
      context.strokeStyle = 'rgba(10, 23, 35)'
      context.lineWidth = 8
      context.stroke()
      context.fillStyle = 'rgba(1, 120, 255, .4)'
      context.fill()

      // 绿色外2
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 59, Math.PI / 180 * blueRateAngle, Math.PI / 180 * greenRateAngle, false)
      context.closePath()
      context.strokeStyle = 'rgba(10, 23, 35)'
      context.lineWidth = 8
      context.stroke()
      context.fillStyle = 'rgba(44, 210, 14, .4)'
      context.fill()

      // 黑色圆外2
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 52, Math.PI / 180 * 0, Math.PI / 180 * 360)
      context.closePath()
      context.fillStyle = 'rgba(10, 23, 35)'
      context.fill()

      // 黄色外3
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 47, Math.PI / 180 * 0, Math.PI / 180 * orangeRateAngle, false)
      context.closePath()
      context.fillStyle = 'rgba(253, 139, 36,.2)'
      context.fill()
      // 天蓝色外3
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 47, Math.PI / 180 * orangeRateAngle, Math.PI / 180 * skyblueRateAngle, false)
      context.closePath()
      context.strokeStyle = 'rgba(10, 23, 35)'
      context.lineWidth = 8
      context.stroke()
      context.fillStyle = 'rgba(2, 216, 216, .2)'
      context.fill()
      // 蓝色外3
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 47, Math.PI / 180 * skyblueRateAngle, Math.PI / 180 * blueRateAngle, false)
      context.closePath()
      context.strokeStyle = 'rgba(10, 23, 35)'
      context.lineWidth = 8
      context.stroke()
      context.fillStyle = 'rgba(1, 120, 255, .2)'
      context.fill()
      // 绿色外3
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 47, Math.PI / 180 * blueRateAngle, Math.PI / 180 * greenRateAngle, false)
      context.closePath()
      context.strokeStyle = 'rgba(10, 23, 35)'
      context.lineWidth = 8
      context.stroke()
      context.fillStyle = 'rgba(44, 210, 14, .2)'
      context.fill()

      // 黑色圆外2
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 42, Math.PI / 180 * 0, Math.PI / 180 * 360)
      context.closePath()
      context.fillStyle = 'rgba(10, 23, 35)'
      context.fill()
    }
  }

}
</script>

<style lang="less" scoped>
.num_box {
  display: flex;
  width: 100%;
  height: 250px;
  margin-top: 20px;

  .num {
    margin-left: 9px;
    margin-top: 0px;

    .blue {
      p {
        font-size: 12px;
        letter-spacing: 1px;
        // line-height: 22px;
        color: rgba(255, 255, 255, .7);
      }

      .num_blue {
        display: inline-block;
        margin-right: 5px;
        width: 18px;
        height: 6px;
        margin-top: 15px;
        border-radius: 3px;
        background-color: rgba(2, 216, 216, 1);
      }

      .wangluo {
        background-color: #2CD20E;
      }

      .num_value {
        font-size: 13px;
        margin-left: 27px;
        font-style: oblique;
        color: rgba(236, 255, 252, 1);

        .blue_perc {
          margin-left: 9px;
          color: rgba(2, 216, 216, 1);
        }

        .wangluo_font {
          color: #2CD20E;
        }
      }

    }

    .orange {
      p {
        font-size: 12px;
        letter-spacing: 1px;
        color: rgba(255, 255, 255, .7);
      }

      .num_orange {
        display: inline-block;
        margin-right: 5px;
        margin-top: 15px;
        width: 18px;
        height: 6px;
        border-radius: 3px;
        background-color: rgba(253, 139, 36, 1);
      }

      .canyin {
        background-color: #0178FF;
      }

      .num_value {
        font-size: 13px;
        margin-left: 27px;
        font-style: oblique;
        color: rgba(236, 255, 252, 1);

        .orange_perc {
          margin-left: 9px;
          color: rgba(253, 139, 36, 1);
        }

        .canyin_font {
          color: #0178FF;
        }
      }
    }
  }

  .pie {
    flex: 1;
    display: flex;
    justify-content: center;

    .tic_pie_box {
      margin-top: 15px;
      width: 142px;
      height: 142px;

      .canvas_box {
        width: 142px;
        height: 142px;
      }

      .center_font {
        position: absolute;
        float: left;
        width: 142px;
        height: 142px;
        text-align: center;

        .font_box {
          height: 50px;
          font-size: 12px;
          margin-top: 52px;

          p:nth-child(1) {
            color: rgba(219, 239, 255, .6);
          }

          p:nth-child(2) {
            color: rgba(219, 239, 255, .9);
          }
        }
      }
    }
  }
}
</style>
