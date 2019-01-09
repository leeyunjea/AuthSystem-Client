// router/index.js

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import home from '../components/home.vue'


// 뷰 어플리케이션에 라우터 플러그인을 추가한다.
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/home', component: home },
    { path: '*', component: { template: '<div>Not Found</div>'} }
  ]
})

export default router