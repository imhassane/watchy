import gql from "graphql-tag";

export const state = () => ({
    lists: [], list: null,
    error: null
});

export const mutations = {
    setLists: (state, lists) => state.lists = lists,
    setError: (state, error) => state.error = error
};

export const actions = {
    
};