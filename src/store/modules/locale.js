export const namespaced = true;

export const state = {
    selectedLanguage: 'en-US',
    languagesList: [
        { name: 'English', value: 'en-US' },
        { name: 'Polish', value: 'pl-PL' }
    ],
};

export const mutations = {
    'SET_LANGUAGE'(state, payload) {
        state.selectedLanguage = payload;
    },
};

export const actions = {
    checkBrowserLanguage({ commit }) {
        const browserLanguage = window.navigator.language;

        if (browserLanguage.includes('en')) {
            commit('SET_LANGUAGE', 'en-US');
        } else {
            commit('SET_LANGUAGE', browserLanguage);
        }
    }
};

export const getters = {

};
