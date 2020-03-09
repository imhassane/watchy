<template>
    <div class="columns">
        <div class="column is-2">
            <p><strong>Year</strong></p>
            <hr />
            <years-list :onChange="handleYearChange" />
        </div>
        <div class="column is-3">
            <p><strong>Sort by</strong></p>
            <hr />
            <sort-by-list :onChange="handleSortingChange" />
        </div>
        <div class="column is-3">
            <p><strong>Filter by genre</strong></p>
            <hr />
            <genres-list :genres="genres" :onChange=handleGenreChange />
        </div>
    </div>
</template>

<script>
import YearsList from "./years-list";
import GenresList from "./genres-list";
import SortByList from "./sort-by-list";

export default {
    name: 'movies-filter',
    components: {
        GenresList, YearsList, SortByList
    },
    data: () => ({
        year: 2020,
        genre: 12,
        sortBy: 'popularity.desc',
        url: 'discover/movie?sort_by=popularity.desc&with_genres=12&primary_release_year=2020'
    }),
    props: ['genres', 'onUrlChange'],
    methods: {
        handleYearChange({ target: {value} }) {
            this.year = value;
            this.updateMovies();
        },
        handleGenreChange({ target: {value} }) {
            this.genre = value;
            this.updateMovies();
        },
        handleSortingChange({ target: {value} }) {
            this.sortBy = value;
            this.updateMovies();
        },
        async updateMovies() {
            this.url = `discover/movie?sort_by=${this.sortBy}&with_genres=${this.genre}&primary_release_year=${this.year}`;
            this.onUrlChange(this.url);
        }
    },
    created: function() {
        this.onUrlChange(this.url);
    }
}
</script>