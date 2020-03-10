<template>
    <div>
        <h5 class="title is-5">Videos & trailers</h5>
        <hr />
        <div class="has-text-centered" v-if="videos">
            <div v-if="videos.length === 0">
                <p><strong>No trailer or movie is available for this movie</strong></p>
            </div>
        </div>
        <div class="columns is-multiline is-1">
            <div class="column" v-for="v in videos" :key="v.id"
                v-bind:class="[ videos.length === 1 ? 'is-' : 'is-half']"
            >
                <figure v-if="v.site.toLowerCase() === 'youtube'" class="image is-16by9">
                    <iframe class="has-ratio" width="640" height="360"
                        :src="`https://www.youtube.com/embed/${v.key}?showinfo=0`"
                        frameborder="0" allowfullscreen
                    ></iframe>
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'movie-details-videos',
    props: ['videos']
}
</script>