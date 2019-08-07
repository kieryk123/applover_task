import Vue from 'vue';
import Vuex from 'vuex';
import * as auth from '@/store/modules/auth.js';
import * as loading from '@/store/modules/loading.js';
import * as locale from '@/store/modules/locale.js';
import * as notification from '@/store/modules/notification.js';
import * as organization from '@/store/modules/organization.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        loading,
        locale,
        notification,
        organization
    }
});
