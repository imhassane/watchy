export const state = () => ({
    genres: [],
    genre: null
});

export const mutations = {
    setGenres: (state, genres) => state.genres = genres,
    setGenre: (state, genre) => state.genre = genre,
};

export const actions = {
    GET_GENRES: async function({ commit }) {
        let cached = null;
        if(process.client)
            cached = sessionStorage.getItem('x-cached-genres');
        if(cached) {
            commit('setGenres', JSON.parse(cached));
        } else {
            const {data} = await this.$axios.get("/genre/movie/list");
            if(process.client)
                sessionStorage.setItem('x-cached-genres', JSON.stringify(data.genres));
            commit('setGenres', data.genres);
        }
    }
}