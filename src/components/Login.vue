
<template>
  <div class="hello">
    <h2>Log In</h2>
      <form @submit.prevent="onSubmit">
          <input placeholder="Enter your ID" v-model="user.userId">
          <input placeholder="Enter your password" v-model="user.password">


          <button type="submit">Login</button>
      </form>
    

       <!-- <div class="form-group">
  <label>UserName</label>
  <input type="text" class="form-control" v-model="user.username">
</div>
<div class="form-group">
  <label>Mail</label>
  <input type="text" class="form-control" v-model="user.mail">
</div> -->

      
  </div>

  

</template>

<add key="webpages:Enabled" value="true" /> 

<script>
import axios from "axios";
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)

export default {
  name: "Login",
  props: {
    msg: String
  },

  data() {
    return {
      user: {
        userId: "",
        password: "",
        name: "",
        email: ""
      }
    };
  },

  methods: {
    onSubmit() {
      //console.log(this.user.userId)
      //console.log(this.user.password)
      axios
        .post("http://localhost:8082/api/login", this.user)
        // .then(response => response.data)
        .then(response => response.data, this.goToPages())
        .catch(e => {
          this.errors.push(e);
        });
    },
    goToPages() {
      //   this.$router.push({
      //     name: 'home'
      //   });

    //   this.$router.beforeEach(function(home, Login, onSubmit) {
    //     next();
    //   });

    this.$router.replace(this.$route.query.redirect || '/home')
    }
  }
};
</script>