import Vue from 'vue'
import App from './App.vue'
import router from './router'


import VueResource from 'vue-resource';



Vue.use(VueResource);

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  el : '#app',
  template : '<App/>',
  components : {App},
  router
}).$mount('#app')

