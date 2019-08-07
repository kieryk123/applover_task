import i18n from '@/i18n';

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
    checkBrowserLanguage({ commit, state }) {
        const browserLanguage = window.navigator.language;
        const isLanguageAvailable = state.languagesList.findIndex(el => el.value === browserLanguage) != -1 ? true : false;

        if (isLanguageAvailable) {
            if (browserLanguage.includes('en')) {
                commit('SET_LANGUAGE', 'en-US');
            } else {
                commit('SET_LANGUAGE', browserLanguage);
            }
        } else {
            commit('SET_LANGUAGE', 'en-US');
        }
    },
    setLanguage({ commit }, language) {
        commit('SET_LANGUAGE', language);
        i18n.locale = language;
    }
};

export const getters = {

};
