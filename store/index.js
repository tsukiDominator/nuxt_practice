// import Vue from 'vue'
// import Vuex from 'vuex'
// import lemon from './module/lemon'
// import peach from './module/peach'

// Vue.use(Vuex)

// const store = () => new Vuex.Store({
//     modules: {
//         lemon,
//         peach
//     },
//     actions: {

//     }
// })

// export default store
/**
 * 以上为经典模式，自己创建vueX实例，将modules封装出去
 * 将在nuxt3中弃用
 */

export const state = () => ({
    counter: 0
})

export const mutations = {
    increment(state) {
        state.counter++
    }
}


