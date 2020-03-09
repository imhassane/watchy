export const state = () => ({
    movie: null
});

export const mutations = {
    setMovie: (state, movie) => state.movie = movie
};

export const actions = {
    GET_MOVIE: async function({ commit }, id) {
        let cached = null, url = `/movie/${id}`;
        if(process.client)
            cached = sessionStorage.getItem(url);

        if(cached) {
            commit('setMovie', JSON.parse(cached));
        } else {
            const {data} = await this.$axios.get(url);
            commit('setMovie', data);
            if(process.client)
                sessionStorage.setItem(url, JSON.stringify(data));
        }
    }
}