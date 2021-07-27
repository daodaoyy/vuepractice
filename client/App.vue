<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    keys: {
      type: String,
      default: 'zh-CN'
    }
  },
  data:function(){
    return {
    }
  },
  beforeUpdate() {
    // this.$store.dispatch("user/getInfo");
    // if(["",null].includes(this.employeeNo)){
    //    console.log('window._employeeNo_',this.employeeNo);　
    //    window.top.location.href=process.env.LUCKY_APP_RET_DOMAIN+'/api/logout';
    // }
  }
};
</script>
