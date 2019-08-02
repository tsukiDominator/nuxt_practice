const state = () => ({
    peachCount: 0
})

const mutations = {
    add(state, param) {
        state.peachCount += param;
    },
    reduce(state, param) {
        state.peachCount -= param;
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

