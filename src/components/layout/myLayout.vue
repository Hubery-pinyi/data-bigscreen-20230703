<template>
  <div id="index" ref="appRef">
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
  </div>
</template>

<script>
import resizeMixin from '../../utils/resizeMixin'
export default {
  name: 'myLayout',
  mixins: [resizeMixin],
  data () {
    return {
      showTitle: ''
    }
  },
  created () {
    this.showTitle = this.$route.name
  }

}
</script>

<style lang="less" scoped>
#index {
  // 设计稿宽高
  width: 1920px;
  height: 1080px;
  background: url(../../assets/images/bj@2x.png) no-repeat center center;
  background-size: cover;

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
    height: 986px;  //设定好主要内容的高度
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

}
</style>
