<template>
  <div class="row">
    <div class="column">

      &nbsp;<span class="fas fa-sort"></span>&nbsp;Sort by:
      <label for="sortStar">
        <input type="radio" id="sortStar" v-model="sort" name="sortOption" value="star">
        <span class="link-like" :class="{underline:sort==='star'}" >Stars</span>
      </label>
      &nbsp;
      <label for="sortFollow">
        <input type="radio" id="sortFollow" v-model="sort" name="sortOption" value="follow">
        <span class="link-like" :class="{underline:sort==='follow'}" >Followers</span>
      </label>
      &nbsp;
      <label for="sortView">
        <input type="radio" id="sortView" v-model="sort" name="sortOption" value="views">
        <span class="link-like" :class="{underline:sort==='views'}" >Views</span>
      </label>
      &nbsp;

      <span class="fas fa-times link-like" v-show="sort" @click="sort=''"></span>
    </div>
    <div class="column">
      &nbsp;<span class="fas fa-filter"></span>&nbsp;Filter by:
      <input type="text" v-model="filter" name="filter value">

    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'feedsort',
  data(){
    return{
      sort:'',
      filter:''
    }
  },
  watch:{
    sort(){
      this.$emit('input', {sort:this.sort, filter:this.filter});
    },
    filter(){
      this.$emit('input', {sort:this.sort, filter:this.filter});
    }
  }
}
</script>

<style scoped>

.column {
  float: left;
  width:40%;
}

@media screen and (max-width: 768px) {
  .column {
    margin-top: 3%;
    width: 100%;
  }
}

</style>
