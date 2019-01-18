<template>
  <div class="home">
    <feed class="feed"></feed>
  </div>
</template>

<script>
// @ is an alias to /src
import feed from '@/components/Feed.vue'

export default {
  name: 'home',
  components: { feed },
}
</script>

<style scoped>
  .feed{
    margin-bottom: 10%;
  }
</style>
