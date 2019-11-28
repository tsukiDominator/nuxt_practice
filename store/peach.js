export const state = () => ({
    peachCount: 0
})

export const mutations = {
    add(state, param) {
        state.peachCount += param;
    },
    reduce(state, param) {
        state.peachCount -= param;
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