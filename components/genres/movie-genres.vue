<template>
    <div class="buttons">
        <button v-for="g in genres" :key="g.id" class="button is-primary">{{ g.name }}</button>
    </div>
</template>

<script>
export default {
    name: 'movie-genres',
    props: ['genres']
}
</script>