<template>
    <div id="salesCount"></div>
</template>
<script lang="ts">
export default {
  name: 'salesCount',
  props: {
    salesWayName: {
      type: Array,
      default: () => ['默认数据', '默认数据', '默认数据', '默认数据']
    },
    salesWayData: {
      type: Array,
      default: () => [362, 567, 721, 907]
    },
    gridLeft_channel: {
      type: String,
      default: '-3%'
    },
    gridRight_channel: {
      type: String,
      default: '6%'
    },
    gridWidth_channel: {
      type: String,
      default: '90%'
    },
    yAxislabelMargin_channel: {
      type: Number,
      default: 10
    },
    seriesLabelOffset_channel: {
      type: Array,
      default: () => [265, 0]
    }
  },
  data () {
    return {
      // labelToLeft: '-17%', // 标签向左偏移量
      labelMargin: 80

    }
  },
  watch: {
    salesWayName () {
      this.getChart()
    },
    salesWayData () {
      this.getChart()
    }
  },
  created () {
    if (this.$route.name === 'hangzhouScreen') {
      this.labelToLeft = '-11%'
    }
  },
  mounted () {
    this.getChart()
  },
  methods: {
    getChart () {
      const chartDom = document.getElementById('salesCount')
      const chart = this.$echarts.init(chartDom)
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          show: false
        },
        grid: {
          top: '2%',
          left: this.gridLeft_channel,
          right: this.gridRight_channel,
          width: this.gridWidth_channel,
          bottom: '5%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          show: false,
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: this.salesWayName,
          offset: 0,
          axisLine: {
            show: false // 是否显示坐标轴轴线
          },
          axisTick: {
            show: false // 是否显示坐标轴刻度
          },
          axisLabel: {
            margin: this.yAxislabelMargin_channel,
            color: 'rgba(255,255,255, .8)'
            // textStyle: {
            // align: 'left'
            // }
          }
        },
        series: [
          {
            name: '2023',
            type: 'bar',
            data: this.salesWayData,
            stack: '渠道销售统计',
            barWidth: '20%',
            showBackground: true, // 开启柱状图背景
            label: { // 柱状图标签
              show: true,
              color: 'rgba(255, 255, 255, 0.7)',
              position: 'insideLeft',
              offset: this.seriesLabelOffset_channel
            },
            backgroundStyle: { // 柱状图颜色背景
              color: 'rgba(255, 255, 255, 0.1)',
              borderRadius: [5, 5, 5, 5]
            },
            itemStyle: { // 柱状图样式设置
              normal: {
                barBorderRadius: [5, 5, 5, 5],
                color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                  offset: 1,
                  color: '#204463'
                }, {
                  offset: 0,
                  color: '#01e0dd'
                }])
              }
            }
          }
        ]
      }
      chart.setOption(option)
    }
  }
}
</script>

<style lang="less" scoped>
#salesCount {
  width: 100%;
  height: 100%;
}
</style>
