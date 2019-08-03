export const namespaced = true;

export const state = {
    inProgress: false,
    value: 0
};

export const mutations = {
    'UPDATE'(state, payload) {
        state.inProgress = payload;
    },
    'SET_VALUE'(state, payload) {
        state.value = payload;
    },
};

export const actions = {
    update({ commit }, value) {
        commit('UPDATE', value);
    },
    setValue({ commit }, value) {
        commit('SET_VALUE', value);
    },
    reset({ commit }) {
        commit('SET_VALUE', 100);

        setTimeout(() => {
            commit('UPDATE', false);
            commit('SET_VALUE', 0);
        }, 100);
    }
};

export const getters = {
    isInProgress: state => state.inProgress ? true : false,
    value: state => state.value
};
