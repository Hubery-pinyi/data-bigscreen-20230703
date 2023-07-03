<template>
  <div id="passenger_box"></div>
</template>

<script>
export default {
  name: 'passengerSource',
  props: {
    xAxisData: {
      type: Array,
      default: () => []
    },
    seriesData: {
      type: Array,
      default: () => []
    }

  },
  watch: {
    xAxisData () {
      this.getChart()
    },
    seriesData () {
      this.getChart()
    }
  },
  mounted () {
    this.getChart()
  },
  methods: {
    getChart () {
      const chartDom = document.getElementById('passenger_box')
      const chart = this.$echarts.init(chartDom)
      const option = {
        xAxis: {
          type: 'category',
          data: this.xAxisData,
          offset: 4,
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.2)',
              width: 2
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255, 255, 255, .04)'
            }
          }
        },
        grid: {
          top: '10%',
          left: '7%',
          right: '0'
        },
        series: [
          {
            data: this.seriesData,
            type: 'bar',
            barWidth: 15,
            labelLayout: '10',
            itemStyle: {
              color: 'rgba(0, 255, 8, 0.36)',
              borderColor: 'rgba(0, 255, 8, 1)'
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
#passenger_box{
  width: 100%;
  height: 100%;
}

</style>
