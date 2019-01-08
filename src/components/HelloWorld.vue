<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
<!--     
    <button v-on:click="login">로그인</button>

    <button>회원가입</button> -->
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }//,
//   methods: {
//     login: function (event) {
//       // 메소드 안에서 사용하는 `this` 는 Vue 인스턴스를 가리킵니다
//       alert('Hello ' + this.name + '!')
//       // `event` 는 네이티브 DOM 이벤트입니다
//       if (event) {
//         alert(event.target.tagName)
//       }
//     }
//   }
}
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
