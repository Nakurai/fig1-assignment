<template>
  <div class="about">
    <h1>Feed Instructions</h1>
    <ul>
      <li>Please write your solution using a modern Javascript framework</li>
      <li>We prefer you don't use a packaged CSS solution such as Google Material UI</li>
      <li>Comments item from the API should be treated as regular objects from the feed</li>
      <li>Please include testing in your submission</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'about',
}
</script>

<style scoped>

  .about li{
    margin-top: 3%;
  }

  @media screen and (min-width: 768px) {
    .about{
      width: 80%;
      margin-left: auto;
    }
  }
</style>
