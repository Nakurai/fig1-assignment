<template>
  <div class="cheader">
    <img class="avatar" :src="picture" :alt="username+' profile'">
    <b class="username">{{username}}</b>
  </div>
</template>

<script>
export default {
  name: 'card-header',
  props: {
    picture: String,
    username: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cheader{
  padding: 2%;
  margin-bottom: 1%;
}
.username{
  font-size: 1.3em;
  margin-left: 2%;
}
.avatar{
  border-radius: 30%;
  vertical-align: middle;
}

@media screen and (max-width: 768px) {
  .cheader{
    border-top: solid 1px silver;
  }
}

</style>
