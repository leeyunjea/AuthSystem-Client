<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <p>
      URL Shortening
      <a href="https://localhost:8080/" target="_blank" rel="noopener">url-shortening</a>.
    </p>

  </div>

</template>

<script>
export default {
  name: "home",
  props: {
    msg: String
  } //,
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
