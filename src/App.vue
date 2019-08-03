<template>
    <div class="app">
        <AppNotification
            v-if="$store.getters.isNotificationVisible"
            :text="$store.state.notification"
            @close="$store.dispatch('closeNotification')"
        />
        <AppHeader>
            <span>Select language:</span>
            <Select :options="$store.state.languagesList" v-model="selectedLanguage" />
        </AppHeader>
        <div class="app__main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import Select from '@/components/Select.vue';
import AppNotification from '@/components/AppNotification.vue';

export default {
    computed: {
        selectedLanguage: {
            set(language) {
                this.$store.commit('SET_LANGUAGE', language);
            },
            get() {
                return this.$store.state.selectedLanguage;
            }
        }
    },
    methods: {

    },
    components: {
        AppHeader,
        AppNotification,
        Select,
    }
}
</script>

<style lang="scss">
@import '@/styles/main.scss';

.app {
    flex-grow: 1;
    width: 100%;
    padding-top: 85px;

    &__main {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        height: 100%;
        width: 100%;
        padding: 22px 30px;
    }

    &__page {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        &--login {
            padding-top: 67px;

            .app__page-title {
                margin-bottom: 39px;
            }
        }
    }

    &__page-title {
        width: 100%;
        margin-top: 0;
        text-align: center;
        font-size: 24px;
        font-weight: 500;
    }
}
</style>
