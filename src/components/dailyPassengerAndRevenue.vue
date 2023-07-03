<template>
  <div class="passenger_box">
    <div class="passengerAndRevenue">
      <p class="number">{{ dailyNumber }}</p>
      <p class="font">{{ dailyFont }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'dailyPassengerAndRevenue',
  props: {
    dailyNumber: {
      type: Number,
      default: 0
    },
    dailyFont: {
      type: String,
      default: '暂无显示'
    }
  }

}
</script>

<style lang="less" scoped>
.passenger_box{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../assets/images/ic_kl@2x.png') no-repeat 24px center;
  background-size: 73px auto;
  .passengerAndRevenue{
    text-align: center;
    width: 100%;
    height: 57px;
    .number{
      font-size: 26px;
      color: rgba(242, 255, 250, 1);
      font-style: oblique;
      letter-spacing: 2px;
    }
    .font{
      font-size: 15px;
      color: rgba(0, 218, 216, 1);
    }
  }
}

</style>
