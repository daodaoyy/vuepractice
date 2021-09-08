<template>
  <div class="home">
    <button @click="clickClosure">tm的闭包</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      clickClosure() {
        // 5->5,5,5,5,5
        // for (var i = 0; i < 5; i++) {
        //   setTimeout(function() {
        //     console.log(new Date, i);
        //   }, 1000);
        // }
        // console.log(new Date, i);

        // 5->0,1,2,3,4
        // for (var i = 0; i < 5; i++) {
        //   (function(j) {
        //     setTimeout(function() {
        //       console.log(new Date(), j)
        //     }, 1000)
        //   })(i)
        // }
        // console.log(new Date, i);

        // 5->0,1,2,3,4
        // for (var i = 0; i < 5; i++) {   
        //   setTimeout(function(j) {
        //     console.log(new Date(), j)
        //   }, 1000, i)
        //   }
        // console.log(new Date, i);

        // 报错->0,1,2,3,4
        for (let i = 0; i < 5; i++) {
          setTimeout(function() {
            console.log(new Date(), i)
          }, 1000)
        }
        // console.log(new Date, i);
      }
    }
  };
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

