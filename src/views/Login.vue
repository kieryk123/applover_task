<template>
    <div class="app__page app__page--login">
        <h1 class="app__page-title">{{ $t('log_in') }}</h1>
        <form @submit.prevent="submitForm" class="login-form" novalidate>
            <FormInput
                v-model="formData.email"
                id="email-field"
                name="email-field"
                type="email"
                inputmode="email"
                :placeholder="$t('email')"
            />
            <FormInput
                v-model="formData.password"
                id="password-field"
                name="password-field"
                type="password"
                :placeholder="$t('password')"
            />
            <FormCheckbox
                v-model="formData.keepLoggedIn"
                id="logged-in-checkbox"
                name="logged-in-checkbox"
                :placeholder="$t('keep_me_logged_in')"
            />
            <Button
                submit
                modifier="primary"
                :disabled="isLoadingInProgress"
            >{{ $t('login') }}</Button>
        </form>
    </div>
</template>

<script>
import FormInput from '@/components/Form/FormInput.vue';
import FormCheckbox from '@/components/Form/FormCheckbox.vue';
import Button from '@/components/Button.vue';
import { mapGetters } from 'vuex';

export default {
    data: () => ({
        formData: {
            email: '',
            password: '',
            keepLoggedIn: false
        }
    }),
    computed: {
        ...mapGetters('loading', {
            isLoadingInProgress: 'isInProgress'
        }),
    },
    methods: {
        submitForm() {
            this.$store.dispatch('auth/signIn', this.formData);
            console.log({...this.formData});
        }
    },
    components: {
        FormInput,
        FormCheckbox,
        Button
    }
}
</script>

<style lang="scss">
.login-form {
    display: block;
    width: 100%;
    max-width: 397px;
}
</style>

<i18n>
{
  "en-US": {
    "log_in": "Log in",
    "email": "Email address",
    "password": "Password",
    "keep_me_logged_in": "Keep me logged in",
    "login": "Login"
  },
  "pl-PL": {
    "log_in": "Zaloguj się",
    "email": "Adres email",
    "password": "Hasło",
    "keep_me_logged_in": "Chcę pozostać zalogowany",
    "login": "Zaloguj"
  }
}
</i18n>
