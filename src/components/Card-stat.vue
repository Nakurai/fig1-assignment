<template>
  <div class="row">
    <div class="column">
      <span class="fas fa-star"></span>
      {{star}}
    </div>
    <div class="column">
      <span class="fas fa-users"></span>
       {{follow}}
    </div>
    <div class="column">
      <span class="fas fa-eye"></span>
       {{view}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-stat',
  props: {
    view: Number,
    star: Number,
    follow: Number,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.column {
  float: left;
  width:33%;
  text-align: center;
}


</style>
