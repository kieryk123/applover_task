import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';
import AuthService from '@/services/AuthService.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        authToken: null,
        selectedLanguage: 'EN',
        languagesList: [
            { name: 'English', value: 'EN' },
            { name: 'Polish', value: 'PL' }
        ],
        notification: '',
        loading: {
            inProgress: false,
            value: 0
        }
    },
    mutations: {
        'SET_LANGUAGE'(state, payload) {
            state.selectedLanguage = payload;
        },
        'SET_NOTIFICATION'(state, payload) {
            state.notification = payload;
        },
        'UPDATE_LOADING'(state, payload) {
            state.loading.inProgress = payload;
        },
        'SET_LOADING_VALUE'(state, payload) {
            state.loading.value = payload;
        },
        'AUTH_USER'(state, authToken) {
            state.authToken = authToken;
        },
    },
    actions: {
        signIn({ commit, dispatch }, formData) {
            dispatch('updateLoading', true);
            setTimeout(() => dispatch('setLoadingValue', 60), 100);

            const authData =  {
                email: formData.email,
                password: formData.password
            };

            AuthService.signIn(authData)
                .then(res => {
                    const data = res.data;
                    const status = res.status;
                    const authToken = data.token;

                    if (formData.keepLoggedIn) {
                        localStorage.setItem('authToken', authToken);
                    }

                    console.log(res);
                    console.log(data);
                    console.log('status:', status);

                    commit('AUTH_USER', authToken);
                    dispatch('closeNotification');
                    dispatch('resetLoading');
                    router.push('/');
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
                            dispatch('resetLoading');
                            break;
                        case 401:
                            commit('SET_NOTIFICATION', 'Invalid email or password.');
                            dispatch('resetLoading');
                        default:
                            break;
                    }
                });
        },
        tryAutoSignIn({ commit, dispatch }) {
            const authToken = localStorage.getItem('authToken');
            if (!authToken) return;
            commit('AUTH_USER', authToken);
            router.push('/');
        },
        closeNotification({ commit }) {
            commit('SET_NOTIFICATION', '');
        },
        updateLoading({ commit }, value) {
            commit('UPDATE_LOADING', value);
        },
        setLoadingValue({ commit }, value) {
            commit('SET_LOADING_VALUE', value);
        },
        resetLoading({ commit }) {
            commit('SET_LOADING_VALUE', 100);

            setTimeout(() => {
                commit('UPDATE_LOADING', false);
                commit('SET_LOADING_VALUE', 0);
            }, 100);
        }
    },
    getters: {
        isNotificationVisible(state) {
            return state.notification.length > 0 ? true : false;
        },
        isLoadingInProgress(state) {
            return state.loading.inProgress ? true : false;
        },
        loadingValue(state) {
            return state.loading.value;
        },
        isUserAuthenticated(state) {
            return state.authToken ? true : false;
        }
    }
});
