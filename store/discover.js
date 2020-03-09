export const state = () => ({
    movies: [],
    current_page: 0,
    total_results: 0,
    total_pages: 0
});

export const mutations = {
    setMovies: (state, movies) => state.movies = movies,
    setCurrentPage: (state, page) => state.currentPage = page,
    setTotalResults: (state, total) => state.totalResults = total,
    setTotalPages: (state, pages) => state.totalPages = pages,
    setDiscover: (state, discover) => {
        state.total_pages = discover.total_pages;
        state.total_results = discover.total_results;
        state.current_page = discover.page;
        state.movies = discover.results;
    }
};

export const actions = {
    GET_MOVIES: async function({commit}, url) {
        let cached = null;
        if(process.client)
            cached = sessionStorage.getItem(url);

        if(cached) {
            commit('setDiscover', JSON.parse(cached));
        } else {
            const {data} = await this.$axios.get(url);
            if(process.client)
                sessionStorage.setItem(url, JSON.stringify(data));
            commit('setDiscover', data);
        }
    }
};