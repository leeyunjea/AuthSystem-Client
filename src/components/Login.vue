
<template>
  <div class="hello">
    <h2>Log In</h2>
      <form @submit="onSubmit">
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

<script>
import axios from "axios";

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
        name: ""
      }
    };
  },

  methods: {
    onSubmit() {
      //console.log(this.user.userId)
      //console.log(this.user.password)
      axios
        .post('http://localhost:8081/api/login', this.user)
        .then(response => response.data)
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>