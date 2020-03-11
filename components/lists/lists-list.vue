<template>
    <div>
        <p v-if="error" class="notification is-danger"><small>{{ error }}</small></p>
        <p v-else-if="lists.length === 0">
            You don't have any list for now.
        </p>
        <div v-else>
            <ul>
                <li v-for="l in lists" style="margin: 5px 0;" :key="l.id">
                    <nuxt-link :to="`/list/${l.id}`" class="button is-light">
                        {{ l.name }}
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import gql from "graphql-tag";

export default {
    name: 'lists-list',
    computed: {
        lists() { return this.$store.state.lists.lists; },
        error() { return this.$store.state.lists.error; }
    },
    async mounted() {
       try {
           const {data:{lists}} = await this.$apollo.query({ query: gql`query{ lists{id, name} }` });
           this.$store.commit('lists/setLists', lists);
       } catch(ex) {
           this.$store.commit('lists/setError', ex.graphQLErrors[0].message);
       }
    }
}
</script>