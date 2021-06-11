export default {
    state: () => ({
        token: '',
    }),

    getters: {
    },

    mutations: {
        LOGIN(state, payload) {
            state.token = payload
        },
    },

    actions: {
        login({ commit }, data) {
            commit('LOGIN', data)
        },
    },
}