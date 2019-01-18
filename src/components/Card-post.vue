<template>
  <div>
    <div class="row">
      <div class="column left">
        <cheader class="is-hidden-desktop" :username="card.username" :picture="card.image.profile"></cheader>
        <div class="text-center">
          <img class="post-img" :src="card.image.post" :alt="card.id">
        </div>
        <cstat :star="card.stats.star" :follow="card.stats.follow" :view="card.stats.views" ></cstat>
      </div>
      <div class="column right caption">
        <p>
          <cheader class="is-hidden-mobile" :username="card.username" :picture="card.image.profile"></cheader>
        </p>
        <p class="">
          <span v-html="card.caption"></span>
        </p>
      </div>
    </div>
    <!-- {{Object.keys(p)}} <br> -->
  </div>
</template>

<script>
import cheader from '@/components/Card-header.vue'
import cstat from '@/components/Card-stat.vue'

export default {
  name: 'post',
  props: {
    card: Object
  },
  components:{ cheader, cstat }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.caption{
  padding: 1%;
}

/* Responsive COLUMN layout */
.post-img{
  width: 100%;
  height: auto;
}

.column {
  float: left;
}

.left {
  width: 70%;
}
.right {
  width: 25%;
}

@media screen and (min-width: 768px) {
  .caption{
    margin-left: 2%;
    border-radius: 3%;
  }
}
@media screen and (max-width: 768px) {
  .column {
    width: 100%;
  }
}
</style>
