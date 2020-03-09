<template>
  <div>
    <navbar />
    <search />
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
  import navbar from '~/components/navbar';
  import search from '~/components/search';

  export default {
    components: { navbar, search }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
  * {
    font-family:  'Poppins', serif;
  }
</style>