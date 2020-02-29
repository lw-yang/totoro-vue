const state = {
    userInfo: Object,
    token: String
};

const mutations = {
    setUser: (state, userInfo) => {
        state.userInfo = userInfo
    },
    setToken: (state, token) => {
        state.token = token
    }
};

const actions = {
};

export default {
    state,
    mutations,
    actions
}