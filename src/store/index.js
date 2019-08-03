import Vue from 'vue';
import Vuex from 'vuex';
import AuthService from '@/services/AuthService.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        selectedLanguage: 'EN',
        languagesList: [
            { name: 'English', value: 'EN' },
            { name: 'Polish', value: 'PL' }
        ],
        notification: ''
    },
    mutations: {
        'SET_LANGUAGE'(state, payload) {
            state.selectedLanguage = payload;
        },
        'SET_NOTIFICATION'(state, payload) {
            state.notification = payload;
        }
    },
    actions: {
        signIn({ commit, dispatch }, formData) {
            const authData =  {
                email: formData.email,
                password: formData.password
            };
            AuthService.signIn(authData)
                .then(res => {
                    const data = res.data;
                    const status = res.status;
                    const authToken = data.token;
                    localStorage.setItem('authToken', authToken);
                    console.log(res);
                    console.log(data);
                    console.log('status:', status);

                    if (status === 200) {
                        dispatch('closeNotification');
                    }
                })
                .catch(err => {
                    const res = err.response;
                    const data = res.data;
                    const status = res.status;
                    console.log('data', data);
                    console.log('status:', status);

                    switch (status) {
                        case 500:
                            commit('SET_NOTIFICATION', 'Server error. Prease try again later.');
                            break;
                        case 401:
                            commit('SET_NOTIFICATION', 'Invalid email or password.');
                        default:
                            break;
                    }
                });
        },
        closeNotification({ commit }) {
            commit('SET_NOTIFICATION', '');
        }
    },
    getters: {
        isNotificationVisible(state) {
            return state.notification.length > 0 ? true : false;
        }
    }
});
