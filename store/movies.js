export const state = () => ({
    movie: null,
    reviews: [],
    videos: []
});

export const mutations = {
    setMovie: (state, movie) => state.movie = movie,
    setReviews: (state, reviews) => state.reviews = reviews,
    setVideos: (state, videos) => state.videos = videos
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
    },
    GET_REVIEWS: async function({commit}, id) {
        let cached = null, url = `movie/${id}/reviews`;
        if(process.client)
            cached = sessionStorage.getItem(url);

        if(cached) {
            commit('setReviews', JSON.parse(cached));
        } else {
            const {data} = await this.$axios.get(url);
            commit('setReviews', data);
            if(process.client)
                sessionStorage.setItem(url, JSON.stringify(data));
        }
    },
    GET_VIDEOS: async function({commit}, id) {
        let cached = null, url = `/movie/${id}/videos`;
        if(process.client)
            cached = sessionStorage.getItem(url);

        if(cached) {
            commit('setVideos', JSON.parse(cached));
        } else {
            const {data} = await this.$axios.get(url);
            commit('setVideos', data);
            if(process.client)
                sessionStorage.setItem(url, JSON.stringify(data));
        }
    }
}