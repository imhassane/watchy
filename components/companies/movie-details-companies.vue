<template>
    <div>
        <h5 class="title is-5">Companies</h5>
        <hr />
        <div v-for="c in companies" :key="c.id">
            <span class="tag is-primary" v-if="c.origin_country">{{ c.origin_country }}</span> {{ c.name }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'movie-details-companies',
    props: ['companies']
}
</script>