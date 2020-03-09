<template>
    <div style="margin: 15px 0">
        <div class="columns is-1 is-multiline">
            <div class="column is-2" v-for="m in movies" :key="m.id">
                <nuxt-link :to="getUrl(m.id)">
                    <img :src="getImgCover(m.poster_path)" :alt="m.title" />
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'discover-movies-list',
    props: ['movies'],
    methods: {
        getImgCover(url) {
            return `${process.env.IMAGE_BASE_URL}${url}`
        },
        getUrl(id) {
            return `/movie/${id}`;
        }
    }
}
</script>