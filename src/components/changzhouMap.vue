<template>
  <div class="map_box">
    <div class="showAllMap" @click="showAllMap"><span><img src="../assets/images/ic_fh@2x.png" alt=""></span> 查看全部区域</div>
    <div :class="{ showJiangsu: isShowJiangsu, showZhejiang: isShowZhejiang, showShanghai: isShowShanghai }">
      <dv-flyline-chart-enhanced :config="config" style="width:100%;height:100%;" />
    </div>
    <div class="img_map">
      <img src="../assets/images/ic_dt_jt@2x.png" alt="map" usemap="#changemap">
      <map name="changemap">
        <area shape="poly"
          coords="648,114,597,140,596,148,621,149,612,174,624,201,626,209,666,211,694,162,676,124,648,114" href="#"
          alt="shanghai" @mouseenter="showShanghai" @mouseleave="hideShanghai" @click="toShanghai">
        <area shape="poly"
          coords="769,221,802,281,823,349,851,369,827,444,848,511,725,585,552,484,566,406,542,373,553,338,539,278,555,267,615,259,623,220,661,217,661,255,769,221"
          href="#" alt="hangzhou" @mouseenter="showZhejiang" @mouseleave="hideZhejiang" @click="toHangzhou">
      </map>
    </div>

  </div>
</template>

<script>
export default {
  name: 'changzhouMap',
  data () {
    return {
      isShowJiangsu: true,
      isShowZhejiang: false,
      isShowShanghai: false,
      config: {
        points: [
          {
            name: '茅山森林世界',
            coordinate: [0.51, 0.44],
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
            target: '茅山森林世界'

          },
          {
            source: '宿迁',
            target: '茅山森林世界'

          },
          {
            source: '徐州',
            target: '茅山森林世界'

          },
          {
            source: '扬州',
            target: '茅山森林世界'

          },
          {
            source: '泰州',
            target: '茅山森林世界'

          },
          {
            source: '镇江',
            target: '茅山森林世界'

          },
          {
            source: '南通',
            target: '茅山森林世界'

          },
          {
            source: '南京',
            target: '茅山森林世界'

          },
          {
            source: '无锡',
            target: '茅山森林世界'

          },
          {
            source: '苏州',
            target: '茅山森林世界'

          },
          {
            source: '常州',
            target: '茅山森林世界'

          },
          {
            source: '宿州',
            target: '茅山森林世界'

          },
          {
            source: '淮北',
            target: '茅山森林世界'

          },
          {
            source: '蚌埠',
            target: '茅山森林世界'

          },
          {
            source: '毫州',
            target: '茅山森林世界'

          },
          {
            source: '滁州',
            target: '茅山森林世界'

          },
          {
            source: '阜阳',
            target: '茅山森林世界'

          },
          {
            source: '淮南',
            target: '茅山森林世界'

          },
          {
            source: '六安',
            target: '茅山森林世界'

          },
          {
            source: '合肥',
            target: '茅山森林世界'

          },
          {
            source: '巢湖',
            target: '茅山森林世界'

          },
          {
            source: '安庆',
            target: '茅山森林世界'

          },
          {
            source: '池州',
            target: '茅山森林世界'

          },
          {
            source: '铜陵',
            target: '茅山森林世界'

          },
          {
            source: '芜湖',
            target: '茅山森林世界'

          },
          {
            source: '马鞍山',
            target: '茅山森林世界'

          },
          {
            source: '黄山',
            target: '茅山森林世界'

          },
          {
            source: '宣城',
            target: '茅山森林世界'

          },
          {
            source: '上海',
            target: '茅山森林世界'

          },
          {
            source: '杭州',
            target: '茅山森林世界'

          },
          {
            source: '衢州',
            target: '茅山森林世界'

          },
          {
            source: '金华',
            target: '茅山森林世界'

          },
          {
            source: '丽水',
            target: '茅山森林世界'

          },
          {
            source: '台州',
            target: '茅山森林世界'

          },
          {
            source: '温州',
            target: '茅山森林世界'

          },
          {
            source: '绍兴',
            target: '茅山森林世界'

          },
          {
            source: '宁波',
            target: '茅山森林世界'

          },
          {
            source: '舟山',
            target: '茅山森林世界'

          },
          {
            source: '嘉兴',
            target: '茅山森林世界'

          },
          {
            source: '湖州',
            target: '茅山森林世界'

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
  created () {

  },
  methods: {
    showZhejiang () {
      this.isShowJiangsu = false
      this.isShowZhejiang = true
      this.isShowShanghai = false
    },
    hideZhejiang () {
      this.isShowJiangsu = true
      this.isShowZhejiang = false
      this.isShowShanghai = false
    },
    showShanghai () {
      this.isShowJiangsu = false
      this.isShowZhejiang = false
      this.isShowShanghai = true
    },
    hideShanghai () {
      this.isShowJiangsu = true
      this.isShowZhejiang = false
      this.isShowShanghai = false
    },
    toHangzhou () { // 跳转到浙江
      this.$router.push({ name: 'hangzhouScreen', path: '/hangzhouscreen' })
    },
    toShanghai () {
      console.log('待开发.....')
    },
    showAllMap () {
      this.$router.push({ name: 'groupScreen', path: '/groupScreen' })
    }
  }

}
</script>

<style lang="less" scoped>
.map_box {
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  margin-bottom: 15px;

  .img_map {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 5;

    img {
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }

  .showJiangsu {
    width: 100%;
    height: 100%;
    background: url('../assets/images/background_img/ic_dt_js@2x.png') no-repeat center center;
    background-size: contain;
  }

  .showZhejiang {
    width: 100%;
    height: 100%;
    background: url('../assets/images/background_img/ic_dt_zj3@2x.png') no-repeat center center;
    background-size: contain;
  }

  .showAllMap {
    position: fixed;
    right: 540px;
    font-size: 14px;
    color: rgba(0, 218, 216, 1);
    cursor: pointer;
    z-index: 6;

    img {
      width: 17px;
      height: 17px;
      vertical-align: middle;
    }
  }

  .showShanghai {
    width: 100%;
    height: 100%;
    background: url('../assets/images/background_img/ic_dt_sh@2x.png') no-repeat center center;
    background-size: contain;
  }
}
</style>
