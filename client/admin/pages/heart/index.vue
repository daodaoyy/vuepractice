<template>
  <div class="heart"></div>
</template>

<script>
// git 练习
export default {
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.heart{
  position:relative;
  background-color:#f00;
  width:100px;
  height:100px;
  transform: rotate(135deg);
  top: 100px;
  left: 35%;
}
.heart::before,
.heart::after{
    position:absolute;
    content:'';
    background-color:#f00;
    top:0;
    left:-50%;
    width:100%;
    height:100%;
    border-radius:50%;
}
.heart::after{
    left:0;
    top:50%;
 }
</style>
