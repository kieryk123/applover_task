<template>
    <div class="app">
        <AppProgress
            v-if="isLoadingInProgress"
            :value="loadingValue"
        />
        <AppNotification
            v-if="isNotificationVisible"
            :text="notification"
            @close="$store.dispatch('notification/close')"
        />
        <AppHeader>
            <span>Select language:</span>
            <Select
                v-model="selectedLanguage"
                :options="languagesList"
            />
            <Tooltip
                v-if="isUserAuthenticated"
                size="big"
                :action="() => $store.dispatch('organization/getDetails')"
            >
                <template v-slot:activator="{ toggle }">
                    <Button
                        v-if="isUserAuthenticated"
                        modifier="secondary"
                        small
                        @click="toggle"
                    >My organization</Button>
                </template>
                <template #content>
                    <p v-for="(value, propertyName) in organizationDetails">
                        <strong>{{ propertyName }}</strong>: {{ value }}
                    </p>
                </template>
            </Tooltip>
        </AppHeader>
        <div class="app__main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import AppHeader from '@/components/App/AppHeader.vue';
import AppNotification from '@/components/App/AppNotification.vue';
import AppProgress from '@/components/App/AppProgress.vue';
import Select from '@/components/Select.vue';
import Button from '@/components/Button.vue';
import Tooltip from '@/components/Tooltip.vue';
import { mapGetters, mapState } from 'vuex';

export default {
    created() {
        this.$store.dispatch('auth/tryAutoSignIn');
    },
    computed: {
        // mapGetters
        ...mapGetters('loading', {
            isLoadingInProgress: 'isInProgress',
            loadingValue: 'value'
        }),
        ...mapGetters('notification', {
            isNotificationVisible: 'isVisible'
        }),
        ...mapGetters('auth', [
            'isUserAuthenticated',
        ]),
        ...mapGetters('organization', {
            organizationDetails: 'details'
        }),

        // mapState
        ...mapState('notification', [
            'notification',
        ]),
        ...mapState('locale', [
            'languagesList',
        ]),
        selectedLanguage: {
            set(language) {
                this.$store.commit('locale/SET_LANGUAGE', language);
            },
            get() {
                return this.$store.state['locale'].selectedLanguage;
            }
        }
    },
    components: {
        AppHeader,
        AppNotification,
        AppProgress,
        Select,
        Button,
        Tooltip
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
