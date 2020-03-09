const state = {
    transitionName: String,
};

const mutations = {
    setTransition: (state, transitionName) => {
        state.transitionName = transitionName
    }
};

const actions = {
};

export default {
    state,
    mutations,
    actions
}