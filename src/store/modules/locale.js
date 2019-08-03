export const namespaced = true;

export const state = {
    selectedLanguage: 'EN',
    languagesList: [
        { name: 'English', value: 'EN' },
        { name: 'Polish', value: 'PL' }
    ],
};

export const mutations = {
    'SET_LANGUAGE'(state, payload) {
        state.selectedLanguage = payload;
    },
};

export const actions = {

};

export const getters = {
    
};
