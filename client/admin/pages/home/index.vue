<template>
  <div class="home">
    <button class="closure-box" @click="clickClosure">tm的闭包</button>
    <button class="this-box" @click="thisFunction">this练习</button>
    <button class="eventloop-box" @click="eventLoopFuc">eventLoop练习</button>
    <button class="debounce-box" @click="clickDebounce">防抖debounce练习{{ num }}</button>
    <button class="throlle-box" @click="clickThrolle">节流throttle练习{{ num }}</button>
  </div>
</template>

<script>
import index from './index'
export default index;
</script>

<style lang="less" scoped>
.home {
  margin: auto;
  padding: 30px;
  button {
    width: 200px;
    height: 60px;
  }
}
</style>

