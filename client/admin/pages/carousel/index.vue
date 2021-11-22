<template>
  <div class="carousel">
    <div class="carousel-box">
      <ul>
        <li>
          <img :src="require('./images/banner1.png')" />
        </li>
        <li>
          <img :src="require('./images/banner2.png')" />
        </li>
        <li>
          <img :src="require('./images/banner3.png')" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import index from './index'
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
ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.carousel {
  margin-left: 20%;
  .carousel-box {
  width: 500px;
  height: 200px;
  overflow: hidden;
  ul {
    width: 1500px;
    position: relative;
    left: 0;
    animation: animateImg ease 5s infinite normal;
    li {
      float: left;
      width: 500px;
      height: 200px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
}
/* 动画 */
@keyframes animateImg {
  0% {
    left: 0px;
  }
  20% {
    left: -0px;
  }
  40% {
    left: -500px;
  }
  60% {
    left: -500px;
  }
  80% {
    left: -1000px;
  }
  100% {
    left: -1000px;
  }
}
</style>
