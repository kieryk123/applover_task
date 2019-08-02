<template>
    <div class="app">
        <AppHeader>
            <span>Select language:</span>
            <Select :options="$store.state.languagesList" v-model="selectedLanguage" />
        </AppHeader>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import Select from '@/components/Select.vue';

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
    components: {
        AppHeader,
        Select
    }
}
</script>

<style lang="scss">
@import '@/styles/main.scss';
</style>
