<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <h2>Admin Page</h2>
    <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>
      <br>
      {{user}}
<br>
    
    </p>
    
   
  </div>
  

</template>

<script>
import axios from "axios";

export default {
  name: "AdminPage",
  props: {
    msg: String,
    user: Array
  },

  data: {
    user: ''
  },

  created() {
    // this.fetchData(token);
    debugger;
    axios
      .post("http://localhost:8082/api/admin/listUsers")
      .then(response => {
        debugger;
        this.user = response.data;
      })
      .catch(e => {
        debugger;
        // location.href = "./login";
        this.errors.push(e);
      });
  }
};
</script>

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
