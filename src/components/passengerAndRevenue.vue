<template>
  <div :class="box">
    <div id="data_analysis" :class="analy_data" ref="chart"></div>
  </div>
</template>

<script>
export default {
  name: 'passengerAndRevenue',
  props: {
    yAxisData: {
      type: Array,
      default: () => []
    },
    serieFlowData: {
      type: Array,
      default: () => [120, 100, 110, 105, 90, 120, 120, 80, 120, 100, 120]
    },
    seriesRevenueData: {
      type: Array,
      default: () => [55, 67, 76, 45, 44, 77, 67, 49, 56, 54, 60]
    },
    gridLeft: {
      type: String,
      default: '-3%'
    },
    gridRight: {
      type: String,
      default: '6%'
    },
    gridWidth: {
      type: String,
      default: '90%'
    },
    yAxislabelMargin: {
      type: Number,
      default: 10
    },
    seriesLabelOffset: {
      type: Array,
      default: () => [265, 0]
    }

  },
  watch: {
    yAxisData () {
      this.getCharts()
    },
    serieFlowData () {
      this.getCharts()
    },
    seriesRevenueData () {
      this.getCharts()
    }
  },
  data () {
    return {
      box: '', // 动态样式
      analy_data: '' // 动态样式
      // yAxisNewData: [],
      // serieFlowNewData: [],
      // seriesRevenueNewData: []

    }
  },
  created () {
    if (this.$route.name === 'groupScreen') {
      this.box = 'box_group'
      this.analy_data = 'analy_data_group'
    }
    if (this.$route.name === 'changzhouScreen') {
      this.box = 'box_changzhou'
      this.analy_data = 'analy_data_changzhou'
    }
    if (this.$route.name === 'hangzhouScreen') {
      this.box = 'box_hangzhou'
      this.analy_data = 'analy_data_hangzhou'
    }
  },
  mounted () {
    this.getCharts()
  },
  methods: {
    getCharts () {
      const chartDom = document.getElementById('data_analysis')
      const mychart = this.$echarts.init(chartDom)
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          show: true,
          top: '27',
          bottom: '29',
          left: 0,
          icon: 'roundRect',
          borderRadius: 2,
          itemHeight: 4,
          itemGap: 40,
          itemStyle: {
          },
          textStyle: {
            color: 'rgba(255, 255, 255, .8)',
            fontSize: 11,
            padding: 3
          }
        },
        grid: {
          left: this.gridLeft,
          right: this.gridRight,
          bottom: '0%',
          width: this.gridWidth,
          containLabel: true // 刻度标签
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          show: false
        },
        yAxis: {
          type: 'category',
          data: this.yAxisData,
          axisLine: {
            show: false // 是否显示坐标轴轴线
          },
          axisTick: {
            show: false // 是否显示坐标轴刻度
          },
          axisLabel: {
            margin: this.yAxislabelMargin,
            color: 'rgba(255,255,255, .8)'
            // textStyle: {
            // align: 'left'
            // }
          }
        },
        series: [
          {
            name: '客流量(人次)',
            type: 'bar',
            data: this.serieFlowData,
            barWidth: '15%',
            barGap: '1', // 调整柱状图之间的间距
            showBackground: true, // 开启柱状图背景
            label: { // 柱状图标签
              show: true,
              color: 'rgba(0, 218, 216, 0.9)', // 柱状图标签颜色
              position: 'insideLeft',
              offset: this.seriesLabelOffset
            },
            backgroundStyle: { // 柱状图背景颜色
              color: 'rgba(0, 218, 216, 0.2)',
              borderRadius: [5, 5, 5, 5]
            },
            itemStyle: { // 柱状图样式设置
              normal: {
                barBorderRadius: [5, 5, 5, 5],
                color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                  offset: 1,
                  color: '#097177'
                }, {
                  offset: 0,
                  color: '#00e1e1'
                }])
              }
            }
          },
          {
            name: '营收(元)',
            type: 'bar',
            data: this.seriesRevenueData,
            barWidth: '15%',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(255, 115, 11, 0.2)',
              borderRadius: [5, 5, 5, 5]
            },
            label: {
              show: true,
              color: 'rgba(255, 115, 11, 0.9)',
              position: 'insideLeft',
              offset: this.seriesLabelOffset
            },
            itemStyle: {
              normal: {
                barBorderRadius: [5, 5, 5, 5],
                color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{ // 需要new 一个echarts对象
                  offset: 1,
                  color: '#5A371F'
                }, {
                  offset: 0,
                  color: '#FD720B'
                }])
              }
            }
          }
        ]
      }
      // console.log('draw', option)
      mychart.clear()
      mychart.setOption(option, true)
    }
  }

}
</script>

<style lang="less" scoped>
// 集团数据样式
.box_group {
  width: 100%;
  height: 610px;
  .analy_data_group{
    width: 100%;
    height: 610px;
  }
}

// 常州数据中心
.box_changzhou {
  width: 100%;
  height: 284px;
  .analy_data_changzhou{
    width: 100%;
    height: 240px;
  }
}
//杭州数据中心
.box_hangzhou {
  width: 100%;
  height: 560px;
  .analy_data_hangzhou{
    width: 100%;
    height: 560px;
  }
}

</style>
