import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        selectedLanguage: 'EN',
        languagesList: [
            { name: 'English', value: 'EN' },
            { name: 'Polish', value: 'PL' }
        ]
    },
    mutations: {
        'SET_LANGUAGE'(state, payload) {
            state.selectedLanguage = payload;
        }
    },
    actions: {

    },
    getters: {

    }
});
