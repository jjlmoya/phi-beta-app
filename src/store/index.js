import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import channels from '@/store/modules/channels'


const persistedStates = createPersistedState({
    paths: ['channels']
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
        channels
    },
    plugins: [persistedStates]
})
