
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

// var mytoken = ""

//  var headers = { 
//     withCredentials: true, 
//     headers: { 'Authorization': 'Bearer ' + mytoken } 
// }

export default {
  name: "Login",
  props: {
    msg: String
  },
//   data: {
//     isSignUp: false,
//   },

//   methods: {
//     toggleSignUp() {
//       this.isSignUp = !this.isSignUp;
//     }
//   },

  data() {
    return {
      user: {
        userId: "",
        password: "",
        name: "",
        email: "",
      }
    };
  },


  methods: {
    onSubmit() {
      //console.log(this.user.userId)
      //console.log(this.user.password)
    // debugger;
    localStorage.clear();
      axios
        .post("http://localhost:8082/api/login", this.user)
        // .then(response => response.data, this.goToPages())
        .then(response => {
            if(response.data['password']) {
              localStorage.setItem('auth_token', response.data['password']);
              localStorage.setItem('userId', this.user.userId);
            //   this.toggleLogin();
              location.href = './home';
              
            } else {
            //   app.renderNotification('Successfully Singed Up');
            //   app.toggleSignUp();
            this.errors.push(e);
            }
          })
        .catch(e => {
          location.href = './login';
          this.errors.push(e);
        });
    },
    // goToPages() {
      //   this.$router.push({
      //     name: 'home'
      //   });

    //   this.$router.beforeEach(function(home, Login, onSubmit) {
    //     next();
    //   });

    // this.$router.replace(this.$route.query.redirect || '/home')
    // }
  }
};

</script>