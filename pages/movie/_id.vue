<template>
    <div>
        <div v-if="movie">
            <h1 class="title is-1">{{ movie.title }}</h1>
            <p style="margin: 5px 0">
                
            </p>
            <p><small>{{ movie.overview }}</small></p>
            <hr />

            <p style="margin-bottom: 10px"><strong>Genres</strong></p>
            <movie-genres :genres="movie.genres" />

            <movie-details-navigation />
            <div class="columns is-1">
                <div class="column is-8">
                    <movie-details-videos v-if="videos" :videos="videos.results" />
                    <movie-details-reviews v-if="reviews" :reviews="reviews.results" />
                </div>
                <div class="column is-4">
                    <movie-details-companies :companies="movie.production_companies" />
                    <movie-details-overview
                        :budget="movie.budget" :rating="movie.vote_average" :total_votes="movie.vote_count"
                        :revenue="movie.revenue" :status="movie.status" :language="movie.original_language"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MovieGenres from "~/components/genres/movie-genres";
import MovieDetailsCompanies from "~/components/companies/movie-details-companies";
import MovieDetailsOverview from "~/components/movies/movie-details-overview";
import MovieDetailsNavigation from "~/components/movies/movie-details-navigation";
import MovieDetailsReviews from "~/components/reviews/movie-details-reviews";
import MovieDetailsVideos from "~/components/movies/movie-details-videos";

export default {
    head: () => ({ title: "Details du film" }),
    components: {
        MovieGenres, MovieDetailsCompanies, MovieDetailsOverview, MovieDetailsNavigation,
        MovieDetailsReviews, MovieDetailsVideos
    },
    computed: {
        movie() { return this.$store.state.movies.movie; },
        reviews() { return this.$store.state.movies.reviews; },
        videos() { return this.$store.state.movies.videos; }
    },
    fetch: async function({ store, params }) {
        await store.dispatch('movies/GET_MOVIE', params.id);
        await store.dispatch('movies/GET_REVIEWS', params.id);
        await store.dispatch('movies/GET_VIDEOS', params.id);
    }
}
</script>