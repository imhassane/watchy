<template>
    <nav class="pagination">
        <ul class="pagination-list">
            <li v-for="l in links" :key="l">
                <a
                    class="pagination-link"
                    :aria-label="`Page ${l}`" aria-current="page"
                    v-bind:class="[ l === current_page ? 'is-current': '']"
                >{{ l }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'discover-pagination',
    props: ['links', 'current_page'],
}
</script>