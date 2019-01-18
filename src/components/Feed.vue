<template>
  <div class="home ">
    <div v-if="initLoading">
      Collecting the data...
    </div>
    <div v-else>
      <feedsort @input="changeSortingOptions"></feedsort>
      <div v-for="card in filteredFeed({sort, filter})" :key="card.id" class="card-container">
        <post class="" :card="card" v-if="card.type === 'post'"></post>
        <comment class="" :card="card" v-if="card.type === 'comment'"></comment>
      </div>
      <br><br>
      <div class="text-center">
        <span class="button" @click="loadNext">
          LOAD MORE &nbsp; <span v-show="serverPending" class="fas fa-spinner fa-spin"></span>
        </span>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapGetters} from 'vuex';
import post from '@/components/Card-post.vue'
import comment from '@/components/Card-comment.vue'
import feedsort from '@/components/Feed-sort.vue'

export default {
  name: 'feed',
  components: { post, comment, feedsort },
  data(){
    return{
      initLoading:false,
      serverPending:false,
      sort:'',
      filter:''
    }
  },
  computed:{
    ...mapGetters({
      filteredFeed:'filteredFeed',
    })
  },
  // when the feed is created for the first time, the first five images are fetched
  async created(){
    try {
      if (!this.initLoading) {
        this.initLoading = true;
        await this.loadFeed();
      }
    } catch (e) {
      // console.error(e);
      alert(e);
    } finally {
      this.initLoading = false;
    }
  },
  methods:{
    ...mapActions({
      loadFeed:'loadFeed'
    }),
    changeSortingOptions(infos){
      this.sort = infos.sort;
      this.filter = infos.filter;
    },
    // since loadFeed store the relevant next URL to call, it's easy to load more images just by using the same action method
    async loadNext(){
      try {
        if (!this.serverPending) {
          this.serverPending = true;
          await this.loadFeed();
        }
      } catch (e) {
        // console.error(e);
        alert(e);
      } finally {
        this.serverPending = false;
      }

    }
  }
}
</script>

<style scoped>

.card-container{
  background-color: white;
  margin-top: 3%;
  padding: 1%;
  /* padding-bottom: 10px;
  padding-top: 10px; */
}

@media screen and (min-width: 768px) {
  .card-container{
    width:80%;
    border: 1px solid silver;
    border-radius: 1%;
  }
  .home{
    margin-left: 5%;
  }
}

</style>
