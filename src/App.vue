<template>
  <div id="app">
    <nav>
      <router-view></router-view>
    </nav>
  </div>
</template>

<style lang="less" scoped>
#app{
  width: 100vw;
  height: 100vh;
  background-color: rgba(11, 21, 34);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<style>
.el-input__inner{
  outline: none;
  box-shadow: none;
  color: rgba(255, 255, 255, .6);
  height: 20px;
  background-color:rgba(255, 255, 255, .0);
  border: 1px solid rgba(255, 255, 255, .0);
  line-height: 30px;
  padding: 0;
}

.el-input__icon{
  line-height: 20px;
}
.el-picker-panel{
  background-color:rgba(14, 19, 35, .9) ;
  color: rgba(255, 255, 255, 1) ;
  border: 1px dashed #E4E7ED;
}
.el-date-table td.today span {
    color: rgba(0, 218, 216, 1);
    font-weight: 700;
}
.el-date-table td.today span:hover {
    color: rgba(0, 218, 216, 1);
    font-weight: 700;
}
.el-date-table td.current:not(.disabled) span {
    color: #FFF;
    background-color:  rgba(0, 218, 216, 1);
}
.el-date-picker__header-label.active, .el-date-picker__header-label{
  color: rgba(255, 255, 255, 1);
}
.el-date-table td.available:hover {
    color: rgba(0, 218, 216, 1);
}
.el-date-picker__header-label.active, .el-date-picker__header-label:hover {
    color: rgba(0, 218, 216, 1);
}
.el-picker-panel__icon-btn{
  color: rgba(255, 255, 255, 1);
}
.el-picker-panel__icon-btn:hover {
    color: rgba(0, 218, 216, 1);
}
.el-date-table th{
  color: rgba(255, 255, 255, 1);
}
</style>
