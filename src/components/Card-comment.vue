<template>
  <div class="">
    <!-- {{Object.keys(p)}} <br> -->

    <cheader :username="card.username" :picture="card.image.profile"></cheader>

    <div v-for="comment in card.comments" :key="comment.id" class="comment">
      <span class="">{{comment.text}}</span>
    </div>

  </div>
</template>

<script>
import cheader from '@/components/Card-header.vue'

export default {
  name: 'comment',
  props: {
    card: Object
  },
  components:{cheader}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comment{
  font-size: 1.6em;

}
.comment::first-letter {
  font-size: 2em;
}
</style>
