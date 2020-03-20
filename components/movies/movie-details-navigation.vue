<template>
    <div>
        <div class="tabs is-toggle is-fullwidth">
            <ul>
                <li><a @click.prevent="showAddToList"><strong>Add to list</strong></a></li>
                <li>
                    <a href="#" @click.prevent="movieToFavorites">
                        <strong>{{ movieInformations.favorite ? "Remove from favorites" : "Mark as favorite" }}</strong>
                    </a>
                </li>
                <li>
                    <a href="#" @click.prevent="movieToWatchLater">
                        <strong>{{ movieInformations.watchLater ? "Remove from watch later" : "Add to watch later" }}</strong>
                    </a>
                </li>
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

const MOVIE_INFORMATIONS = gql`
    query ($movieId: Int!) {
        movieInformations(movieId: $movieId) {
            favorite, watchLater
        }
    }
`;

const MOVIE_TO_FAVORITES = gql`
    mutation ($movieId: Int!) {
        movieToFavorites(movieId: $movieId)
    }
`;

const MOVIE_TO_WATCH_LATER = gql`
    mutation ($movieId: Int!) {
        movieToWatchLater(movieId: $movieId)
    }
`;

const ADD_MOVIE_TO_LIST = gql`
    mutation ($listId: Int!, $movieId: Int!) {
        addMovieToList(listId: $listId, movieId: $movieId) {
            id
        }
    }
`;

export default {
    name: 'movie-details-navigation',
    data: () => ({ addToList: false, errors: {}, messages: {}, movieInformations: {} }),
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
        },
        movieToWatchLater: async function() {
            try {
                await this.$apollo.mutate({ mutation: MOVIE_TO_WATCH_LATER, variables: { movieId: parseInt(this.$route.params.id) }});
                this.movieInformations.watchLater = !this.movieInformations.watchLater;
            } catch(ex) {
                if(ex.graphQLErrors)
                    this.errors.moviesToWatchLater = ex.graphQLErrors[0].message;
            }
        },
        movieToFavorites: async function() {
            try {
                await this.$apollo.mutate({ mutation: MOVIE_TO_FAVORITES, variables: { movieId: parseInt(this.$route.params.id) }});
                this.movieInformations.favorite = !this.movieInformations.favorite;
            } catch(ex) {
                if(ex.graphQLErrors)
                    this.errors.moviesToWatchLater = ex.graphQLErrors[0].message;
            }
        }
    },
    computed: {
        lists() { return this.$store.state.lists.lists; }
    },
    mounted: async function(){
        try {
            let variables = { movieId: parseInt(this.$route.params.id) };
            const{data:{movieInformations}} = await this.$apollo.query({ query: MOVIE_INFORMATIONS, variables });
            this.movieInformations = movieInformations;
            
            const {data:{lists}} = await this.$apollo.query({ query: gql`query{ lists{id, name} }` });
            this.$store.commit('lists/setLists', lists);
       } catch(ex) {
           this.$store.commit('lists/setError', ex.graphQLErrors[0].message);
       }
    }
}
</script>