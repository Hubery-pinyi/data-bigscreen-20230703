<template>
  <div class="bar_box">
    <div id="Areabar"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'barOfArea',
  props: {
    cityNames: {
      type: Array,
      default: () => []
    },
    cityDatas: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    cityNames () {
      this.getChart()
    },
    cityDatas () {
      this.getChart()
    }
  },
  mounted () {
    this.getChart()
  },
  methods: {
    getChart () {
      const chartDom = document.getElementById('Areabar')
      const chart = this.$echarts.init(chartDom)
      const option = {
        title: {
          show: false
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          show: true
        },
        legend: {
          show: false
        },
        grid: {
          top: '10%',
          left: '10%',
          right: '10%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          show: false
        },
        yAxis: {
          type: 'category',
          data: this.cityNames,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: '10',
            align: 'right',
            color: 'rgba(255,255,255, .7)'
          }
        },
        series: [
          {
            name: '2023',
            type: 'bar',
            data: this.cityDatas,
            barWidth: '22%',
            barGap: '0%',
            label: {
              show: true,
              position: 'right',
              color: 'rgba(0, 218, 216, 0.8)',
              distance: 6,
              fontSize: 10
            },
            itemStyle: {
              normal: {
                barBorderRadius: [4, 4, 4, 4],
                color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                  offset: 1,
                  color: 'rgba(0, 218, 216, 0.04)'
                },
                {
                  offset: 0,
                  color: 'rgba(0, 239, 238, 1)'
                }
                ])
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
.bar_box{
  width: 100%;
  height: 100%;
  #Areabar{
    width: 100%;
    height: 100%;
  }
}
</style>
