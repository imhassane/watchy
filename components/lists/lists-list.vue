<template>
    <ul>
        <li v-for="l in lists" :key="l.id">
            <nuxt-link :to="`/list/${l.id}`" class="button is-light" style="margin: 5px 0" :title="l.name">
                {{ l.name }}
            </nuxt-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'lists-list',
    computed: {
        lists: function() {
            return [
                { id: 1, name: 'Favorites' },
                { id: 2, name: 'Watch later' },
                { id: 3, name: 'Family' },
                { id: 4, name: "Summer's list" }
            ]
        }
    }
}
</script>