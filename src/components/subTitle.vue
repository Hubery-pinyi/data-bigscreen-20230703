<template>
  <div class="big_box">
    <div class="left_color"></div>
    <div class="content_box">{{ subTitle }}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'subTitle',
  props: {
    subTitle: {
      type: String,
      default: '默认标题'
    }
  }

}
</script>

<style lang="less" scoped>
.big_box {
  width: 100%;
  height: 27px;
  background: linear-gradient(90deg, #00EFEE -150%, rgba(0, 218, 216, -150%));
  display: flex;

  .left_color {
    width: 4px;
    height: 27px;
    background-color: #00DAD8;
  }

  .content_box {
    font-size: 16px;
    letter-spacing: 2px;
    color: #DBEFFF;
    padding-left: 11px;
    line-height: 27px;
  }
}
</style>
