<template>
    <div>
        <div class="tabs is-toggle is-fullwidth">
            <ul>
                <li><a @click.prevent="showAddToList"><strong>Add to list</strong></a></li>
                <li><a href="#"><strong>Mark as favorite</strong></a></li>
                <li><a href="#"><strong>Add to watchlist</strong></a></li>
                <li><a href="#"><strong>View trailer</strong></a></li>
            </ul>
        </div>
        <div id="add-to-list" class="modal" v-bind:class="[ addToList ? 'is-active' : '']">
            <div class="modal-background" @click="hideAddToList"></div>
            <div class="modal-content">
                <div class="box">
                    <h5 class="title is-5">Vos listes</h5>
                    <hr />
                    <p class="has-text-danger" v-if="errors.addToList">{{ errors.addToList.message }}</p>
                    <p class="has-text-primary" v-if="messages.addToList">{{ messages.addToList.message }}</p>
                            
                    <ul>
                        <li v-for="l in lists" :key="l.id">
                            <div style="display: grid; grid-template-columns: 40% 30%; margin: 5px 0">
                                <strong>{{ l.name }}</strong>
                                <button class="button is-primary" @click="addMovieToList(l.id)">Ajouter</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <button class="modal-close is-large" @click="hideAddToList" aria-label="close"></button>
        </div>
    </div>
</template>

<script>
import gql from "graphql-tag";

const ADD_MOVIE_TO_LIST = gql`
    mutation ($listId: Int!, $movieId: Int!) {
        addMovieToList(listId: $listId, movieId: $movieId) {
            id
        }
    }
`;

export default {
    name: 'movie-details-navigation',
    data: () => ({ addToList: true, errors: {}, messages: {} }),
    methods: {
        showAddToList: function() {
            this.addToList = true;
        },
        hideAddToList: function() {
            this.addToList = false;
        },
        addMovieToList: async function(listId) {
            try {
                await this.$apollo.mutate({
                    mutation: ADD_MOVIE_TO_LIST,
                    variables: { listId: parseInt(listId), movieId: parseInt(this.$route.params.id)  }
                });
                this.messages.addToList = { id: listId, message: "The movie has been added" };
            } catch(ex) {
                if(ex.graphQLErrors)
                    this.errors.addToList = {id: listId, message: ex.graphQLErrors[0].message};
            }
        }
    },
    computed: {
        lists() { return this.$store.state.lists.lists; }
    },
    mounted: async function(){
        try {
           const {data:{lists}} = await this.$apollo.query({ query: gql`query{ lists{id, name} }` });
           this.$store.commit('lists/setLists', lists);
       } catch(ex) {
           this.$store.commit('lists/setError', ex.graphQLErrors[0].message);
       }
    }
}
</script>