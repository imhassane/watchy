<template>
    <div>
        <movies-filter />
    </div>
</template>

<script>
import MoviesFilter from "~/components/filter/movies-filter";
export default {
    head: () => ({ title: "A huge selection of movie to discover"}),
    components: { MoviesFilter }
}
</script>