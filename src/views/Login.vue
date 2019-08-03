<template>
    <div class="app__page app__page--login">
        <h1 class="app__page-title">Log in</h1>
        <form @submit.prevent="submitForm" class="login-form" novalidate>
            <FormInput
                v-model="formData.email"
                id="email-field"
                name="email-field"
                type="email"
                inputmode="email"
                placeholder="Email address"
            />
            <FormInput
                v-model="formData.password"
                id="password-field"
                name="password-field"
                type="password"
                placeholder="Password"
            />
            <FormCheckbox
                v-model="formData.keepLoggedIn"
                id="logged-in-checkbox"
                name="logged-in-checkbox"
                placeholder="Keep me logged in"
            />
            <Button
                submit
                modifier="primary"
                :disabled="$store.getters.isLoadingInProgress"
            >Login</Button>
        </form>
    </div>
</template>

<script>
import FormInput from '@/components/Form/FormInput.vue';
import FormCheckbox from '@/components/Form/FormCheckbox.vue';
import Button from '@/components/Button.vue';

export default {
    data: () => ({
        formData: {
            email: '', // login@applover.pl
            password: '', // password123
            keepLoggedIn: false
        }
    }),
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

<style lang="scss" scoped>
.login-form {
    display: block;
    width: 100%;
    max-width: 397px;
}
</style>
