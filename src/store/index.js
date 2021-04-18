import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const persistedStates = createPersistedState({
    paths: []
})

export default createStore({
    state: {},
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    },
    plugins: [persistedStates]
})
