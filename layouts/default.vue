<template>
  <div>
    <navbar />
    <search />
    <div style="padding: 20px 0" class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
  import navbar from '~/components/navbar';
  import search from '~/components/search';

  export default {
    components: { navbar, search },
    mounted: function() {
      this.$store.dispatch('SET_AUTHENTICATION');
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
  * {
    font-family:  'Poppins', serif;
  }
</style>