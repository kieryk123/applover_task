import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(route => route.meta.requiresAuth)) {
        if (store.state['auth'].authToken) {
            next();
            return;
        }
        next({
            path: '/login',
            query: to.query
        });
    } else {
        next();
    }
});

export default router;
