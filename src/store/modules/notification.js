export const namespaced = true;

export const state = {
    notification: '',
};

export const mutations = {
    'SET'(state, payload) {
        state.notification = payload;
    },
};

export const actions = {
    close({ commit }) {
        commit('SET', '');
    },
};

export const getters = {
    isVisible: state => state.notification.length > 0 ? true : false
};
