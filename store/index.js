export const state = () => ({
    authenticated: false,
});

export const mutations = {
    setAuthenticated: (state, authenticated) => state.authenticated = authenticated
};

export const actions = {
    SET_AUTHENTICATION: function({ commit }) {
        const authenticated = process.client ? localStorage.getItem(process.env.AUTH_TOKEN) : null;
        if(process.client)
            commit('setAuthenticated', authenticated !== null);
    }
}