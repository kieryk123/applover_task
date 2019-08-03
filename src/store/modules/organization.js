import OrganizationService from '@/services/OrganizationService';
export const namespaced = true;

export const state = {
    details: null
};

export const mutations = {
    'SET_DETAILS'(state, payload) {
        state.details = payload;
    },
};

export const actions = {
    getDetails({ commit }) {
        if (state.details) {
            return;
        }
        OrganizationService.getDetails()
            .then(res => {
                const data = res.data;
                commit('SET_DETAILS', data);
            })
            .catch(err => {
                console.log(err);
                commit('notification/SET', 'Something went wrong...', { root: true });
            });
    }
};

export const getters = {
    details: state => state.details
};
