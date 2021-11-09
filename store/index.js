
export const state = () => ({
  list: [],
})



export const mutations = {
  Savelist(state, payload) {
    state.list = payload
  },
}

export const actions = {
  Savelist({ commit }, list) {
    commit('Savelist', list)
  },
}
