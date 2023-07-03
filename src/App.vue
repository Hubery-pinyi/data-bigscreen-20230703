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
