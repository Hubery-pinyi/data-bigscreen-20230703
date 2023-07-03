<template>
  <div class="tourust_box">
    <!-- 一销 二销 -->
    <div class="tourust">
      <!-- 图例 -->
      <div class="data">
        <div class="blue">
          <p><span class="line_blue"></span> 一销</p>
          <p class="data_num">{{sale1Revenue}}</p>
        </div>
        <div class="orange">
          <p><span class="line_orange"></span> 二销</p>
          <p class="data_num">{{ sale2Revenue }}</p>
        </div>
      </div>
      <!-- 饼图 -->
      <div class="pie_box">
        <div class="tou_pie_box">
          <canvas id="onsale_pie" width="142" height="142" ></canvas>
        </div>
      </div>
    </div>

    <!-- 线上 线下 -->
    <div class="tourust">
      <div class="data">
        <div class="blue">
          <p><span class="line_blue"></span> 线上</p>
          <p class="data_num">{{onlineRevenue}}</p>
        </div>
        <div class="orange">
          <p><span class="line_orange"></span> 线下</p>
          <p class="data_num">{{ offlineRevenue }}</p>
        </div>
      </div>
      <div class="pie_box">
        <div class="tou_pie_box">
          <canvas id="online_pie" width="142" height="142"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'touristScale',
  props: {
    sale1Revenue: {
      type: Number,
      default: 0
    },
    sale2Revenue: {
      type: Number,
      default: 0
    },
    totalsaleCount: {
      type: Number,
      default: 0
    },
    offlineRevenue: {
      type: Number,
      default: 0
    },
    onlineRevenue: {
      type: Number,
      default: 0
    },
    totalLine: {
      type: Number,
      default: 0
    }
  },
  components: {
  },
  watch: {
    totalsaleCount () {
      this.initSalePie()
    },
    totalLine () {
      this.initOnlinePie()
    }
  },
  data () {
    return {

    }
  },
  created () {
  },
  mounted () {
    this.initSalePie()
    this.initOnlinePie()
  },
  methods: {
    // 一销二销饼图
    initSalePie () {
      const saleOneAngle = +(this.sale1Revenue / (this.sale1Revenue + this.sale2Revenue)) * 360
      const context = document.getElementById('onsale_pie').getContext('2d')
      // 蓝色外1
      context.moveTo(71, 71)
      context.arc(71, 71, 71, Math.PI / 180 * 0, Math.PI / 180 * saleOneAngle, false)
      context.closePath()
      context.fillStyle = 'rgba(2, 216, 216, .2)'
      context.fill()

      // 蓝色外2
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 59, Math.PI / 180 * 0, Math.PI / 180 * saleOneAngle, false)
      context.closePath()
      context.fillStyle = 'rgba(2, 216, 216, 1)'
      context.fill()
      // 黄色外1
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 71, Math.PI / 180 * saleOneAngle, Math.PI / 180 * 360, false)
      context.closePath()
      context.strokeStyle = 'rgba(10, 23, 35)'
      context.lineWidth = 8
      context.stroke()
      context.fillStyle = 'rgba(253, 139, 36,1)'
      context.fill()
      // 黑色圆外1
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 47, Math.PI / 180 * 0, Math.PI / 180 * 360)
      context.closePath()
      context.fillStyle = 'rgba(10, 23, 35)'
      context.fill()
      // 蓝色圆外1
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 47, Math.PI / 180 * 0, Math.PI / 180 * 360)
      context.closePath()
      context.fillStyle = 'rgba(2, 216, 216, .2)'
      context.fill()
      // 蓝色圆外2
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 40, Math.PI / 180 * 0, Math.PI / 180 * 360)
      context.closePath()
      context.fillStyle = 'rgba(2, 216, 216, .2)'
      context.fill()
      // 黑色圆外2
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 38, Math.PI / 180 * 0, Math.PI / 180 * 360)
      context.closePath()
      context.fillStyle = 'rgba(10, 23, 35)'
      context.fill()
      // 黑色圆外3
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 38, Math.PI / 180 * 0, Math.PI / 180 * 360)
      context.closePath()
      context.fillStyle = 'rgba(2, 216, 216, .2)'
      context.fill()
    },
    // 线上线下饼图
    initOnlinePie () {
      const saleOneAngle = +(this.onlineRevenue / (this.onlineRevenue + this.offlineRevenue)) * 360
      const context = document.getElementById('online_pie').getContext('2d')
      // 蓝色外1
      context.moveTo(71, 71)
      context.arc(71, 71, 71, Math.PI / 180 * 0, Math.PI / 180 * saleOneAngle, false)
      context.closePath()
      context.fillStyle = 'rgba(2, 216, 216, .2)'
      context.fill()
      // 蓝色外2
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 59, Math.PI / 180 * 0, Math.PI / 180 * saleOneAngle, false)
      context.closePath()
      context.fillStyle = 'rgba(2, 216, 216, 1)'
      context.fill()
      // 黄色外1
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 71, Math.PI / 180 * saleOneAngle, Math.PI / 180 * 360, false)
      context.closePath()
      context.strokeStyle = 'rgba(10, 23, 35)'
      context.lineWidth = 8
      context.stroke()
      context.fillStyle = 'rgba(253, 139, 36,1)'
      context.fill()
      // 黑色圆外1
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 47, Math.PI / 180 * 0, Math.PI / 180 * 360)
      context.closePath()
      context.fillStyle = 'rgba(10, 23, 35)'
      context.fill()
      // 蓝色圆外1
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 47, Math.PI / 180 * 0, Math.PI / 180 * 360)
      context.closePath()
      context.fillStyle = 'rgba(2, 216, 216, .2)'
      context.fill()
      // 蓝色圆外2
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 40, Math.PI / 180 * 0, Math.PI / 180 * 360)
      context.closePath()
      context.fillStyle = 'rgba(2, 216, 216, .2)'
      context.fill()
      // 黑色圆外2
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 38, Math.PI / 180 * 0, Math.PI / 180 * 360)
      context.closePath()
      context.fillStyle = 'rgba(10, 23, 35)'
      context.fill()
      // 黑色圆外3
      context.beginPath()
      context.moveTo(71, 71)
      context.arc(71, 71, 38, Math.PI / 180 * 0, Math.PI / 180 * 360)
      context.closePath()
      context.fillStyle = 'rgba(2, 216, 216, .2)'
      context.fill()
    }
  }

}
</script>

<style lang="less" scoped>
.tourust_box {
  display: flex;
  width: 100%;
  height: 250px;
  margin-top: 20px;

  .tourust {
    flex: 1;
    display: flex;
    justify-content: flex-start;

    .data {
      margin-left: 9px;
      margin-top: 25px;

      .orange {
        margin-top: 35px;

        .line_orange {
          display: inline-block;
          margin-right: 5px;
          width: 18px;
          height: 6px;
          border-radius: 3px;
          background-color: rgba(253, 139, 36, 1);
        }

      }

      .blue {
        .line_blue {
          display: inline-block;
          margin-right: 5px;
          width: 18px;
          height: 6px;
          border-radius: 3px;
          background-color: rgba(2, 216, 216, 1);
        }

      }

      .data_num {
        font-size: 15px;
        width: 30px;
        margin-left: 27px;
        font-style: oblique;
        color: rgba(236, 255, 252, 1);
      }

      p {
        font-size: 12px;
        letter-spacing: 1px;
        line-height: 22px;
        color: rgba(255, 255, 255, .7);
      }
    }

    .pie_box {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;

      .tou_pie_box {
        margin-top: 15px;
        width: 142px;
        height: 142px;
      }
    }

  }
}
</style>
