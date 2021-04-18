const state = () => ({
    values: []
})

const getters = {
    values: state => state.values
}

const mutations = {
    ADD_CHANNEL (state, payload) {
        state.values.push(payload)
    },
    REMOVE_CHANNEL (state, payload) {
        state.values = state.values.filter(channel => channel !== payload)
    }
}

const actions = {
    add ({ commit }, payload) {
        commit('ADD_CHANNEL', payload)
    },

    remove ({ commit }, payload) {
        commit('REMOVE_CHANNEL', payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
