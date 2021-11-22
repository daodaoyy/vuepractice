import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "admin/home" */'@/admin/pages/home/index.vue'),
    children: [
    ]
  },
  {
    path: '/canvas',
    name: 'Canvas',
    component: () => import(/* webpackChunkName: "admin/canvas" */'@/admin/pages/canvas/index.vue'),
  },
  {
    path: '/carousel',
    name: 'Carousel',
    component: () => import(/* webpackChunkName: "admin/carousel" */'@/admin/pages/carousel/index.vue'),
    meta: {
      title: '纯css自动播放轮播图',
    },
  },
  {
    path: '/heart',
    name: 'Heart',
    component: () => import(/* webpackChunkName: "admin/heart" */'@/admin/pages/heart/index.vue'),
    meta: {
      title: '爱心',
    },
  }
];

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


export default router
