<template>
  <div class="content bg">
    <!-- 全屏容器 -->
    <dv-full-screen-container>
      <!-- 标题 -->
      <div :class="showTitle"></div>

      <!-- 图表主体区域 -->
      <div class="content_main">
        <div class="content_main_left">
          <slot name="content_main_left"></slot>
        </div>
        <div class="content_main_middle">
          <slot name="content_main_middle"></slot>
        </div>
        <div class="content_main_right">
          <slot name="content_main_right"></slot>
        </div>

      </div>

    </dv-full-screen-container>
  </div>
</template>

<script lang='ts'>
import resizeMisin from '../../utils/resize'
export default {
  name: 'pageLayout',
  mixins: [resizeMisin],
  data () {
    return {
      showTitle: ''
    }
  },
  created () {
    console.log(this.$route)
    this.showTitle = this.$route.name
  }

}
</script>

<style lang="less" scoped>
.groupScreen {
  width: 100%;
  height: 95px;
  background: url('../../assets/images/bj_bt@2x.png') no-repeat center center;
  background-size: cover;
}
.changzhouScreen {
  width: 100%;
  height: 95px;
  background: url('../../assets/images/jiangsu/bj_bt_cz@2x.png') no-repeat center center;
  background-size: cover;
}
.hangzhouScreen {
  width: 100%;
  height: 95px;
  background: url('../../assets/images/zhejiang/bj_bt_hz@2x.png') no-repeat center center;
  background-size: cover;
}

.content_main {
  width: 100%;
  height: 100%vh;
  display: flex;

  .content_main_left {
    flex: 0 1 23%;
    margin-left: 40px;
  }

  .content_main_middle {
    flex: 0 1 54%;
    margin-left: 30px;
    margin-right: 30px;
  }

  .content_main_right {
    flex: 0 1 23%;
    margin-right: 40px;
  }

}
</style>
