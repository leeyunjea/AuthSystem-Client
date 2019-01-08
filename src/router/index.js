// router/index.js

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

// 뷰 어플리케이션에 라우터 플러그인을 추가한다.
Vue.use(VueRouter)

// const Home = { template: '<div>Home</div>'}
// const NotFound = { template: '<div>Not Found</div>'}
// const Login = { template: '<div>Login</div>'}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/login', component: Login },
    { path: '*', component: { template: '<div>Not Found</div>'} }
  ]
})

export default router