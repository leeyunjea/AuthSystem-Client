
<template>
  <div class="hello">
    <h2>Register</h2>
      <form @submit="onSubmit">
          <input placeholder="Enter your ID" v-model="user.userId">
          <input placeholder="Enter your password" v-model="user.password">
          <input placeholder="Enter your name" v-model="user.name">
          <input placeholder="Enter your email" v-model="user.email">


          <button type="submit">Register</button>
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

<script>
import axios from "axios";


export default {
  name: "Register",
  props: {
    msg: String
  },

  data() {
    return {
      user: {
        userId: "",
        password: "",
        name: "",
        email:""
      }
    };
  },

  

  methods: {
    onSubmit() {
      //console.log(this.user.userId)
      //console.log(this.user.password)
      axios.post("http://localhost:8082/api/register", this.user)
        .then(response => response.data)
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>