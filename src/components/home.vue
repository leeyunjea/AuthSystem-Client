<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <p>
      API Server
    </p>
  <!-- <component :is="component" :data="data" v-if="component" /> -->

    {{message}}

  </div>

</template>


<script>
import axios from "axios";

export default {
  name: "home",
  props: {
    msg: String,
    message: String,
    token: String
  },

  data: {
    message: "안녕하세요 Vue!",
    token: ''
  },

  created() {
    debugger;
    var tokenId = localStorage.getItem("auth_token");
    this.token = tokenId;
    console.log("token = " + this.token);

    if (!tokenId) {
      location.href = "./login";
    }
    // this.fetchData(token);
    debugger;
    axios
      .post("http://localhost:8089/", tokenId)
      .then(response => {
        debugger;
        if (response.data) {
          localStorage.setItem("helloWorld", response.data);
          console.log(localStorage.getItem("helloWorld"));
          var helloWorld = localStorage.getItem("helloWorld");
          this.message = helloWorld;
          //   location.href = "./home";
        } else {
          //   app.renderNotification('Successfully Singed Up');
          //   app.toggleSignUp();
          this.errors.push(e);
        }
      })
      .catch(e => {
        debugger;
        // location.href = "./login";
        this.errors.push(e);
      });
  },

  methods: {
    //   fetchData(token) {
    //     axios({
    //       method: 'get',
    //       url: 'http://localhost:8081/api/login',
    //       headers: { 'Authorization': `Bearer ${token}` }
    //     })
    //     .then(response => {
    //       this.records = response.data.records;
    //     })
    //     .catch(error => {
    //       if (error.ersponse.status === 401) {
    //         localStorage.removeItem('auth_token');
    //         location.href = './login.html';
    //       }
    //       // handle error
    //     });
    //   }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
