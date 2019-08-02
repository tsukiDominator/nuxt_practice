const state = () => ({
    lemonCount: 0
})

const mutations = {
    add(state, param) {
        state.lemonCount += param;
    },
    reduce(state, param) {
        state.lemonCount -= param;
    }
}

const actions = {
    add: ({ commit }, param) => {
        commit('add', param);
    },
    reduce: ({ commit }, param) => {
        commit('reduce', param);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}