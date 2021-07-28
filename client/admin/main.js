import Vue from 'vue';

import router from '@/admin/router';
import App from './App.vue';
// import axios from 'axios';

//引入axios建立请求
// Vue.prototype.axios = axios;

// Vue.use(iView)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
