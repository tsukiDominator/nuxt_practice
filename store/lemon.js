export const state = () => ({
    lemonCount: 0
})

export const mutations = {
    add(state, param) {
        state.lemonCount += param;
    },
    reduce(state, param) {
        state.lemonCount -= param;
    }
}

export const actions = {
    add: ({ commit }, param) => {
        commit('add', param);
    },
    reduce: ({ commit }, param) => {
        commit('reduce', param);
    }
}