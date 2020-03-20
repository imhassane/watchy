<template>
    <div>
        <h1>Login out ...</h1>
    </div>
</template>

<script>
export default {
    mounted: function() {
        localStorage.removeItem(process.env.AUTH_TOKEN);
        this.$store.dispatch('SET_AUTHENTICATION');
        this.$router.push('/discover');
    }
}
</script>