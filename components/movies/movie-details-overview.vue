<template>
    <div style="margin-top: 30px;">
        <h5 class="title is-5">Overview</h5>
        <hr />
        <ul class="columns is-1 is-multiline">
            <li class="column is-half" style="margin: 4px 0" v-if="language"><strong>Language</strong> <p>{{ language }}</p></li>
            <li class="column is-half" style="margin: 4px 0" v-if="budget"><strong>Budget</strong> <p>{{ budget }}$</p></li>
            <li class="column is-half" style="margin: 4px 0" v-if="revenue"><strong>Revenue</strong> <p>{{ revenue }}$</p></li>
            <li class="column is-half" style="margin: 4px 0" v-if="rating"><strong>Rating</strong> <p>{{ rating }}</p></li>
            <li class="column is-half" style="margin: 4px 0" v-if="total_votes"><strong>Total rates</strong> <p>{{ total_votes }}</p></li>
            <li class="column is-half" style="margin: 4px 0" v-if="status"><strong>Status</strong> <p>{{ status }}</p></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'movie-details-overview',
    props: ['budget', 'revenue', 'language', 'rating', 'total_votes', 'status']
}
</script>