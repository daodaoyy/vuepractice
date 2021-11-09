import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("@/admin/pages/home/index.vue"); //首页

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
    children: [
    ]
  },
//   {
//     path: "/",
//     name: "Login",
//     component: Login
//   },
//   {
//     path: "/secret",
//     name: "Secret",
//     component: Secret
//   }
];

const router = new VueRouter({
  base: "/",
  mode: "history",
  routes
});

export default router;
