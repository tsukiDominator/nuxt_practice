import Vue from 'vue'
import Vuex from 'vuex'
import lemon from './module/lemon'
import peach from './module/peach'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: {
        lemon,
        peach
    },
    actions: {

    }
})

export default store
