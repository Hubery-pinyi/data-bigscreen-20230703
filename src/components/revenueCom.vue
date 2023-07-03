<template>
  <div class="box">
    <div class="datalayout">
      <div>
        <img class="img" src="../assets/images/ic_ys_z@2x.png" alt="">
      </div>
      <div class="middle">
        <div class="title">总营收</div>
        <div class="number">{{ totalRevenue }}</div>
      </div>
      <div>
        <span class="growth_rate"><span v-if="(+totalPercent)>=0">+</span><span v-else>-</span> {{ totalPercent }}%</span>
        <span v-if="(+totalPercent)>=0"><img class="arrow" src="../assets/images/ic_db_z@2x.png" alt=""></span>
        <span v-else><img class="arrow" src="../assets/images/ic_db_d@2x.png" alt=""></span>
      </div>
    </div>

    <div class="datalayout">
      <div>
        <img class="img" src="../assets/images/ic_ys_y@2x.png" alt="" />
      </div>
      <div class="middle">
        <div class="title">当月营收</div>
        <div class="number">{{ monthRevenue }}</div>
      </div>
      <div>
        <span class="growth_rate"><span v-if="(+monthPercent)>=0">+</span><span v-else>-</span> {{ monthPercent }}%</span>
        <span  v-if="(+monthPercent)>=0"><img class="arrow" src="../assets/images/ic_db_z@2x.png" alt=""></span>
        <span v-else><img class="arrow" src="../assets/images/ic_db_d@2x.png" alt=""></span>
      </div>

    </div>

    <div class="datalayout">
      <div>
        <img class="img" src="../assets/images/ic_ys_r@2x.png" alt="" />
      </div>
      <div class="middle">
        <div class="title">当日营收</div>
        <div class="number">{{ dailyRevenue }}</div>
      </div>
      <div>
        <span class="growth_rate"><span v-if="(+dailyPercent)>=0">+</span><span v-else>-</span> {{ dailyPercent }}%</span>
        <span v-if="(+monthPercent)>=0"><img class="arrow" src="../assets/images/ic_db_z@2x.png" alt=""></span>
        <span v-else><img class="arrow" src="../assets/images/ic_db_d@2x.png" alt=""></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'revenueCom',
  props: {
    totalRevenue: {
      type: String,
      default: '10000000'
    },
    totalPercent: {
      type: Number,
      default: 2
    },
    monthPercent: {
      type: Number,
      default: 2
    },
    monthRevenue: {
      type: String,
      default: '10000000'
    },
    dailyPercent: {
      type: Number,
      default: 2
    },
    dailyRevenue: {
      type: String,
      default: '10000000'
    }
  }

}
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  padding-bottom: 40px;

  .datalayout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    .img {
      width: 29px;
      height: 29px;

    }

    .middle {
      flex: 1;
      padding-left: 22px;

      .title {
        font-size: 15px;
        color: #FFFFFF;
        opacity: 40%;
      }

      .number {
        font-size: 26px;
        color: #F2FFFA;
      }

    }

    .growth_rate {
      font-size: 13px;
      color: #FFFFFF;
      opacity: 60%;
    }

    .arrow {
      width: 16px;
      height: 16px;
    }
  }
}</style>
