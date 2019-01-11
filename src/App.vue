<template >
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

  

    <router-link to="/login" v-if="!isLogin" exact>Login</router-link>
    <router-link to="/register" v-if="!isSignUp" exact>Register</router-link> 
    <!-- v-if="false"  -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import home from "./components/home.vue";

// const app = new Vue({
//   el: '#app',

//   components: {
//     HelloWorld
//   },

//   data: {
//     isSignUp: false,
//     isLogin: false,
//   },

//   methods: {
//     toggleSignUp() {
//       this.isSignUp = !this.isSignUp;
//     },
//     toggleLogin() {
//       this.isLogin = !this.isLogin;
//     }
//   }
// })

export default {
  name: "app",
  components: {
    HelloWorld
  },

  data: {
    isLogin: true,
    isSignUp: true
  },

  methods: {
    toggleLogin() {
      this.isLogin = !this.isLogin;
    },
    toggleSignUp() {
      this.isSignUp = !this.isSignUp;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
