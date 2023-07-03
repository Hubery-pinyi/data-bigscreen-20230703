<template>
  <div class="map_box">
    <div
      :class="{ 'showJiangsu': isShowJiangsu, 'showAllMap': isShowAllMap, 'showZhejiang': isShowZhejiang, 'showShanghai': isShowShanghai }">
      <dv-flyline-chart-enhanced :config="config" :dev="true" style="width:100%;height:100%;" />
    </div>
    <div class="img_map">
      <img src="../assets/images/ic_dt_jt@2x.png" alt="map" usemap="#changemap">
      <map name="changemap">
        <area shape="poly" coords="245,44,254,14,283,45,372,24,516,106,560,96,613,98,634,114,585,137,588,155,614,153,604,169,609,206,606,254,553,260,480,311,460,284,412,284,388,234,367,227,312,220,289,186,122,195,127,155,181,167,245,90,245,44" href="#" alt="changzhou" @mouseenter="showJiangsu" @mouseleave="hideJiangsu" @click="toChangzhou" />
        <area shape="poly" coords="648,114,597,140,596,148,621,149,612,174,624,201,626,209,666,211,694,162,676,124,648,114"
          href="#" alt="shanghai" @mouseenter="showShanghai" @mouseleave="hideShanghai" @click="toShanghai">
        <area shape="poly"
          coords="769,221,802,281,823,349,851,369,827,444,848,511,725,585,552,484,566,406,542,373,553,338,539,278,555,267,615,259,623,220,661,217,661,255,769,221"
          href="#" alt="hangzhou" @mouseenter="showZhejiang" @mouseleave="hideZhejiang" @click="toHangzhou">
      </map>

    </div>

  </div>
</template>

<script>
export default {
  name: 'groupMap',
  data () {
    return {
      isShowAllMap: true,
      isShowJiangsu: false,
      isShowZhejiang: false,
      isShowShanghai: false,

      config: {
        points: [
          {
            name: '茅山森林世界',
            coordinate: [0.51, 0.455],
            halo: {
              show: true,
              color: 'rgba(30, 191, 13)'
            },
            icon: {
              src: require('../assets/images/mapCenterPoint.png'),
              width: 40,
              height: 40
            },
            text: {
              show: false,
              color: 'rgba(253, 139, 36)',
              fontSize: '12'
            }
          },
          {
            name: '云上草原',
            coordinate: [0.605, 0.52],
            halo: {
              show: true,
              color: 'rgba(1, 222, 219)'
            },
            icon: {
              // src: '../assets/images/mapCenterPoint.png',
              src: require('../assets/images/mapCenterPoint.png'),
              width: 40,
              height: 40
            },
            text: {
              show: false,
              color: 'rgba(253, 139, 36)',
              fontSize: '12'
            }
          },
          { name: '连云港', coordinate: [0.29, 0.1] },
          { name: '盐城', coordinate: [0.4, 0.1] },
          { name: '淮安', coordinate: [0.365, 0.24] },
          { name: '宿迁', coordinate: [0.30, 0.23] },
          { name: '徐州', coordinate: [0.24, 0.25] },
          { name: '扬州', coordinate: [0.44, 0.27] },
          { name: '泰州', coordinate: [0.49, 0.26] },
          { name: '镇江', coordinate: [0.49, 0.35] },
          { name: '南通', coordinate: [0.56, 0.22] },
          { name: '南京', coordinate: [0.45, 0.42] },
          { name: '无锡', coordinate: [0.56, 0.32] },
          { name: '苏州', coordinate: [0.615, 0.35] },
          { name: '上海', coordinate: [0.67, 0.32] },
          { name: '常州', coordinate: [0.53, 0.35] },
          { name: '宿州', coordinate: [0.24, 0.34] },
          { name: '淮北', coordinate: [0.21, 0.39] },
          { name: '蚌埠', coordinate: [0.28, 0.42] },
          { name: '毫州', coordinate: [0.19, 0.47] },
          { name: '阜阳', coordinate: [0.19, 0.58] },
          { name: '滁州', coordinate: [0.36, 0.42] },
          { name: '淮南', coordinate: [0.27, 0.51] },
          { name: '六安', coordinate: [0.31, 0.66] },
          { name: '合肥', coordinate: [0.365, 0.52] },
          { name: '巢湖', coordinate: [0.42, 0.58] },
          { name: '安庆', coordinate: [0.40, 0.78] },
          { name: '池州', coordinate: [0.47, 0.75] },
          { name: '铜陵', coordinate: [0.46, 0.625] },
          { name: '芜湖', coordinate: [0.47, 0.55] },
          { name: '马鞍山', coordinate: [0.47, 0.49] },
          { name: '黄山', coordinate: [0.55, 0.72] },
          { name: '杭州', coordinate: [0.64, 0.62] },
          { name: '宣城', coordinate: [0.54, 0.56] },
          { name: '衢州', coordinate: [0.65, 0.78] },
          { name: '金华', coordinate: [0.71, 0.63] },
          { name: '丽水', coordinate: [0.75, 0.82] },
          { name: '温州', coordinate: [0.83, 0.75] },
          { name: '台州', coordinate: [0.82, 0.58] },
          { name: '绍兴', coordinate: [0.72, 0.50] },
          { name: '宁波', coordinate: [0.76, 0.430] },
          { name: '舟山', coordinate: [0.79, 0.380] },
          { name: '嘉兴', coordinate: [0.67, 0.380] },
          { name: '湖州', coordinate: [0.60, 0.440] }

        ],
        lines: [
          {
            source: '连云港',
            target: '茅山森林世界',
            duration: [50, 50],
            orbitColor: 'transparent'
          },
          {
            source: '盐城',
            target: '茅山森林世界',
            duration: [50, 50],
            orbitColor: 'transparent'
          },
          {
            source: '淮安',
            target: '茅山森林世界',
            duration: [50, 50],
            orbitColor: 'transparent'
          },
          {
            source: '宿迁',
            target: '茅山森林世界',
            duration: [50, 50],
            orbitColor: 'transparent'
          },
          {
            source: '徐州',
            target: '茅山森林世界',
            duration: [100, 100],
            orbitColor: 'transparent'
          },
          {
            source: '扬州',
            target: '茅山森林世界',
            duration: [100, 100],
            orbitColor: 'transparent'
          },
          {
            source: '泰州',
            target: '茅山森林世界',
            duration: [100, 100],
            orbitColor: 'transparent'
          },
          {
            source: '镇江',
            target: '茅山森林世界',
            duration: [100, 100],
            orbitColor: 'transparent'
          },
          {
            source: '南通',
            target: '茅山森林世界',
            duration: [100, 100],
            orbitColor: 'transparent'
          },
          {
            source: '南京',
            target: '茅山森林世界',
            duration: [60, 70],
            orbitColor: 'transparent'
          },
          {
            source: '无锡',
            target: '茅山森林世界',
            duration: [20, 30],
            orbitColor: 'transparent'
          },
          {
            source: '苏州',
            target: '茅山森林世界',
            duration: [40, 40],
            orbitColor: 'transparent'
          },
          {
            source: '常州',
            target: '茅山森林世界',
            duration: [100, 100],
            orbitColor: 'transparent'
          },
          {
            source: '宿州',
            target: '茅山森林世界',
            duration: [100, 100],
            orbitColor: 'transparent'
          },
          {
            source: '淮北',
            target: '茅山森林世界',
            duration: [50, 80],
            orbitColor: 'transparent'
          },
          {
            source: '蚌埠',
            target: '茅山森林世界',
            duration: [80, 100],
            orbitColor: 'transparent'
          },
          {
            source: '毫州',
            target: '茅山森林世界',
            duration: [20, 50],
            orbitColor: 'transparent'
          },
          {
            source: '滁州',
            target: '茅山森林世界',
            duration: [60, 70],
            orbitColor: 'transparent'
          },
          {
            source: '阜阳',
            target: '茅山森林世界',
            duration: [70, 70],
            orbitColor: 'transparent'
          },
          {
            source: '淮南',
            target: '茅山森林世界',
            duration: [60, 70],
            orbitColor: 'transparent'
          },
          {
            source: '六安',
            target: '茅山森林世界',
            duration: [40, 70],
            orbitColor: 'transparent'
          },
          {
            source: '合肥',
            target: '茅山森林世界',
            duration: [60, 60],
            orbitColor: 'transparent'
          },
          {
            source: '巢湖',
            target: '茅山森林世界',
            duration: [50, 70],
            orbitColor: 'transparent'
          },
          {
            source: '安庆',
            target: '茅山森林世界',
            duration: [40, 60],
            orbitColor: 'transparent'
          },
          {
            source: '池州',
            target: '茅山森林世界',
            duration: [60, 60],
            orbitColor: 'transparent'
          },
          {
            source: '铜陵',
            target: '茅山森林世界',
            duration: [20, 30],
            orbitColor: 'transparent'
          },
          {
            source: '芜湖',
            target: '茅山森林世界',
            duration: [80, 80],
            orbitColor: 'transparent'
          },
          {
            source: '马鞍山',
            target: '茅山森林世界',
            duration: [60, 60],
            orbitColor: 'transparent'
          },
          {
            source: '黄山',
            target: '茅山森林世界',
            duration: [50, 50],
            orbitColor: 'transparent'
          },

          {
            source: '宣城',
            target: '茅山森林世界',
            duration: [30, 30],
            orbitColor: 'transparent'
          },

          {
            source: '上海',
            target: '茅山森林世界',
            duration: [50, 50],
            orbitColor: 'transparent'
          },
          {
            source: '杭州',
            target: '茅山森林世界',
            duration: [60, 60],
            orbitColor: 'transparent'
          },
          {
            source: '衢州',
            target: '茅山森林世界',
            duration: [40, 40],
            orbitColor: 'transparent'
          },
          {
            source: '金华',
            target: '茅山森林世界',
            duration: [80, 80],
            orbitColor: 'transparent'
          },
          {
            source: '丽水',
            target: '茅山森林世界',
            duration: [30, 30],
            orbitColor: 'transparent'
          },
          {
            source: '台州',
            target: '茅山森林世界',
            duration: [50, 50],
            orbitColor: 'transparent'
          },
          {
            source: '温州',
            target: '茅山森林世界',
            duration: [60, 60],
            orbitColor: 'transparent'
          },
          {
            source: '绍兴',
            target: '茅山森林世界',
            duration: [30, 30],
            orbitColor: 'transparent'
          },
          {
            source: '宁波',
            target: '茅山森林世界',
            duration: [70, 70],
            orbitColor: 'transparent'
          },
          {
            source: '舟山',
            target: '茅山森林世界',
            duration: [40, 50],
            orbitColor: 'transparent'
          },
          {
            source: '嘉兴',
            target: '茅山森林世界',
            duration: [40, 80],
            orbitColor: 'transparent'
          },
          {
            source: '湖州',
            target: '茅山森林世界',
            duration: [80, 100],
            orbitColor: 'transparent'
          },
          // 云上草原
          {
            source: '连云港',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [100, 100],
            orbitColor: 'transparent'
          },
          {
            source: '盐城',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [50, 50],
            orbitColor: 'transparent'
          },
          {
            source: '淮安',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [50, 50],
            orbitColor: 'transparent'
          },
          {
            source: '宿迁',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [50, 50],
            orbitColor: 'transparent'
          },
          {
            source: '徐州',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [100, 100],
            orbitColor: 'transparent'
          },
          {
            source: '扬州',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [100, 100],
            orbitColor: 'transparent'
          },
          {
            source: '泰州',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [100, 100],
            orbitColor: 'transparent'
          },
          {
            source: '镇江',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [100, 100],
            orbitColor: 'transparent'
          },
          {
            source: '南通',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [100, 100],
            orbitColor: 'transparent'
          },
          {
            source: '南京',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [60, 70],
            orbitColor: 'transparent'
          },
          {
            source: '无锡',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [20, 30],
            orbitColor: 'transparent'
          },
          {
            source: '苏州',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [40, 40],
            orbitColor: 'transparent'
          },
          {
            source: '常州',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [100, 100],
            orbitColor: 'transparent'
          },
          {
            source: '宿州',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [100, 100],
            orbitColor: 'transparent'
          },
          {
            source: '淮北',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [50, 80],
            orbitColor: 'transparent'
          },
          {
            source: '蚌埠',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [80, 100],
            orbitColor: 'transparent'
          },
          {
            source: '毫州',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [20, 50],
            orbitColor: 'transparent'
          },
          {
            source: '滁州',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [60, 70],
            orbitColor: 'transparent'
          },
          {
            source: '阜阳',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [70, 70],
            orbitColor: 'transparent'
          },
          {
            source: '淮南',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [60, 70],
            orbitColor: 'transparent'
          },
          {
            source: '六安',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [40, 70],
            orbitColor: 'transparent'
          },
          {
            source: '合肥',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [60, 60],
            orbitColor: 'transparent'
          },
          {
            source: '巢湖',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [50, 70],
            orbitColor: 'transparent'
          },
          {
            source: '安庆',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [40, 60],
            orbitColor: 'transparent'
          },
          {
            source: '池州',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [60, 60],
            orbitColor: 'transparent'
          },
          {
            source: '铜陵',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [20, 30],
            orbitColor: 'transparent'
          },
          {
            source: '芜湖',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [80, 80],
            orbitColor: 'transparent'
          },
          {
            source: '马鞍山',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [60, 60],
            orbitColor: 'transparent'
          },
          {
            source: '黄山',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [50, 50],
            orbitColor: 'transparent'
          },
          {
            source: '宣城',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [30, 30],
            orbitColor: 'transparent'
          },
          {
            source: '上海',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [50, 50],
            orbitColor: 'transparent'
          },
          {
            source: '杭州',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [60, 60],
            orbitColor: 'transparent'
          },
          {
            source: '衢州',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [40, 40],
            orbitColor: 'transparent'
          },
          {
            source: '金华',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [80, 80],
            orbitColor: 'transparent'
          },
          {
            source: '丽水',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [30, 30],
            orbitColor: 'transparent'
          },
          {
            source: '台州',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [50, 50],
            orbitColor: 'transparent'
          },
          {
            source: '温州',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [60, 60],
            orbitColor: 'transparent'
          },
          {
            source: '绍兴',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [30, 30],
            orbitColor: 'transparent'
          },
          {
            source: '宁波',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [70, 70],
            orbitColor: 'transparent'
          },
          {
            source: '舟山',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [40, 50],
            orbitColor: 'transparent'
          },
          {
            source: '嘉兴',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [40, 80],
            orbitColor: 'transparent'
          },
          {
            source: '湖州',
            target: '云上草原',
            color: 'rgba(44, 238, 240)',
            duration: [80, 100],
            orbitColor: 'transparent'
          }

        ],
        icon: {
          show: true,
          src: require('../assets/images/ic_d@2x.png')
        },
        text: {
          show: true,
          color: 'rgba(255, 255, 255,.8)',
          fontSize: 11
        },
        k: -1,
        Flyline: {
          duration: [100, 100],
          orbitColor: 'rgba(103, 224, 227, .1)'
        }

      }
    }
  },
  methods: {
    showJiangsu () {
      this.isShowAllMap = false
      this.isShowJiangsu = true
      this.isShowZhejiang = false
      this.isShowShanghai = false
    },
    showZhejiang () {
      this.isShowAllMap = false
      this.isShowJiangsu = false
      this.isShowZhejiang = true
      this.isShowShanghai = false
    },
    showShanghai () {
      this.isShowAllMap = false
      this.isShowJiangsu = false
      this.isShowZhejiang = false
      this.isShowShanghai = true
    },
    hideJiangsu () {
      this.isShowAllMap = true
      this.isShowJiangsu = false
      this.isShowZhejiang = false
      this.isShowShanghai = false
    },
    hideZhejiang () {
      this.isShowAllMap = true
      this.isShowJiangsu = false
      this.isShowZhejiang = false
      this.isShowShanghai = false
    },
    hideShanghai () {
      this.isShowAllMap = true
      this.isShowJiangsu = false
      this.isShowZhejiang = false
      this.isShowShanghai = false
    },
    toChangzhou () { // 跳转到江苏
      this.$router.push({ name: 'changzhouScreen', path: '/changzhouscreen' })
    },
    toHangzhou () { // 跳转到杭州
      this.$router.push({ name: 'hangzhouScreen', path: '/hangzhouscreen' })
    },
    toShanghai () {
      console.log('待开发.....')
    }
  }

}
</script>

<style lang="less" scoped>
.map_box {
  position: relative;
  width: 100%;
  height: 100%;

  .img_map {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }

  .showAllMap {
    width: 100%;
    height: 100%;
    background: url('../assets/images/background_img/ic_dt_z@2x.png') no-repeat center center;
    background-size: contain;
  }

  .showJiangsu {
    width: 100%;
    height: 100%;
    background: url('../assets/images/background_img/ic_dt_js2@2x.png') no-repeat center center;
    background-size: contain;
  }

  .showZhejiang {
    width: 100%;
    height: 100%;
    background: url('../assets/images/background_img/ic_dt_zj2@2x.png') no-repeat center center;
    background-size: contain;

  }

  .showShanghai {
    width: 100%;
    height: 100%;
    background: url('../assets/images/background_img/ic_dt_sh2@2x.png') no-repeat center center;
    background-size: contain;
  }

}
</style>
