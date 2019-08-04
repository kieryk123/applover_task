<template>
    <ConfigWizard
        :current-step="currentStep"
        :steps="configSteps"
    />
</template>

<script>
import ConfigWizard from '@/components/ConfigWizard.vue';

export default {
    data: () => ({
        configSteps: ['choose door', 'choose division', 'choose color'],
        currentStep: 1
    }),
    components: {
        ConfigWizard
    }
}
</script>

<style lang="scss">

</style>
