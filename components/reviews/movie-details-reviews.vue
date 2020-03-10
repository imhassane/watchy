<template>
    <div style="margin: 25px 0">
        <h5 class="title is-5">Reviews</h5>
        <hr />
        <div v-if="reviews">
            <div style="margin: 10px 0" v-for="r in reviews" :key="r.id">
                <p><strong>Review by {{ r.author }}</strong></p>
                <p><small>{{ r.content.slice(0, 300) }}...</small></p>
            </div>
            <div class="has-text-centered" v-if="reviews.length === 0">
                <p><strong>No review has been added for this movie yet.</strong></p>
                <button class="button is-primary" style="margin: 5px 0">Add the first review</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'movie-details-reviews',
    props: ['reviews']
}
</script>