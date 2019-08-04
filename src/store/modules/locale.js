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
        const isLanguageAvailable = state.languagesList.find(el => el.value === browserLanguage);

        if (isLanguageAvailable) {
            if (browserLanguage.includes('en')) {
                commit('SET_LANGUAGE', 'en-US');
            } else {
                commit('SET_LANGUAGE', browserLanguage);
            }
        } else {
            commit('SET_LANGUAGE', 'en-US');
        }
    }
};

export const getters = {

};
