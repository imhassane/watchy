<template>
    <div>
        <movies-filter :onUrlChange="handleUrlChange" :genres="genres" />
        <hr />
        <discover-pagination :links="page_links" :current_page="current_page" />
        <p><small>{{ discover.total_results }} movies found</small></p>
        <discover-movies-list :movies="discover.movies" />
        <hr />
        <discover-pagination :links="page_links" :current_page="current_page" />
    </div>
</template>

<script>
import MoviesFilter from "~/components/filter/movies-filter";
import DiscoverPagination from "~/components/discover/discover-pagination";
import DiscoverMoviesList from "~/components/discover/discover-movies-list";

export default {
    head: () => ({ title: "A huge selection of movie to discover"}),
    components: { MoviesFilter, DiscoverPagination, DiscoverMoviesList },
    data: () => ({ page_links: [], current_page: 0 }),
    methods: {
        async handleUrlChange(url) {
            await this.$store.dispatch('discover/GET_MOVIES', url);
            this.handlePageLinksUpdate();
        },
        handlePageLinksUpdate() {
            const { total_pages, current_page } = this.discover;
            let i = 0, links = [];
            if(total_pages > 0) i = 1;
            for(; i <= total_pages; i++) links.push(i);
            this.page_links = links;
            this.current_page = current_page;
        }
    },
    computed: {
        genres() { return this.$store.state.genres.genres; },
        discover() { return this.$store.state.discover; }
    },
    mounted: async function() {
        await this.$store.dispatch('genres/GET_GENRES');
    }
}
</script>