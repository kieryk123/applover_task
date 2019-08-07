import router from '@/router';
import AuthService from '@/services/AuthService.js';

export const namespaced = true;

export const state = {
    authToken: null
};

export const mutations = {
    'AUTH_USER'(state, authToken) {
        state.authToken = authToken;
    }
};

export const actions = {
    signIn({ commit, dispatch }, formData) {
        dispatch('loading/update', true, { root: true });
        setTimeout(() => dispatch('loading/setValue', 60, { root: true }), 100);

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
                dispatch('notification/close', null, { root: true });
                dispatch('loading/reset', null, { root: true });
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
                        commit('notification/SET', 'Server error. Prease try again later.', { root: true });
                        dispatch('loading/reset', null, { root: true });
                        break;
                    case 401:
                        commit('notification/SET', 'Invalid email or password.', { root: true });
                        dispatch('loading/reset', null, { root: true });
                    default:
                        break;
                }
            });
    },
    tryAutoSignIn({ commit, dispatch }) {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) return;
        commit('AUTH_USER', authToken);
        router.push({
            path: '/',
            query: router.currentRoute.query
        });
    }
};

export const getters = {
    isUserAuthenticated: state => state.authToken ? true : false
};
