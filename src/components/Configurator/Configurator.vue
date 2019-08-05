<template>
    <div class="configurator">
        <div class="configurator__head">
            <ConfiguratorWizard
                :current-step="currentStep"
                :steps="configSteps"
            />
        </div>
        <div class="configurator__body">
            <div class="configurator__visualization-wrapper">

            </div>
            <div class="configurator__options-wrapper">
                <ConfiguratorStep v-if="currentStep === 1">
                    <ConfiguratorStepGroup>
                        <template #head>
                            <span>Door type</span>
                        </template>

                        <template #body>
                            <FormRadio
                                id="single-door-type"
                                name="door-type"
                                v-model="door.type"
                                value-to-set="single"
                            >Single door</FormRadio>

                            <FormRadio
                                id="double-door-type"
                                name="door-type"
                                v-model="door.type"
                                value-to-set="double"
                            >Double door</FormRadio>
                        </template>
                    </ConfiguratorStepGroup>

                    <ConfiguratorStepGroup>
                        <template #head>
                            <span>Door size</span>
                        </template>

                        <template #body>

                        </template>
                    </ConfiguratorStepGroup>
                </ConfiguratorStep>
            </div>
        </div>
    </div>
</template>

<script>
// Configurator related components
import ConfiguratorWizard from '@/components/Configurator/ConfiguratorWizard.vue';
import ConfiguratorStep from '@/components/Configurator/ConfiguratorStep.vue';
import ConfiguratorStepGroup from '@/components/Configurator/ConfiguratorStepGroup.vue';

// Form related components
import FormRadio from '@/components/Form/FormRadio.vue';

export default {
    data: () => ({
        configSteps: ['choose door', 'choose division', 'choose color'],
        currentStep: 1,
        door: {
            type: 'single',
            width: '',
            height: ''
        }
    }),
    methods: {
        nextStep() {
            if (this.currentStep === configSteps.length) {
                return;
            }
            this.currentStep = this.currentStep++;
        },
        previousStep() {
            if (this.currentStep === 1) {
                return;
            }
            this.currentStep = this.currentStep--;
        }
    },
    components: {
        ConfiguratorWizard,
        ConfiguratorStep,
        ConfiguratorStepGroup,
        FormRadio
    }
}
</script>

<style lang="scss">
.configurator {
    max-width: 775px;
    width: 100%;

    &__head {
        padding-bottom: 20px;
	}

	&__body {
        display: flex;
        flex-direction: row;
	}

	&__visualization-wrapper {
        flex-basis: 72.5%;
        max-width: 72.5%;
        min-height: 475px;
        border: 1px solid #E6E6E6;
        padding: 25px;
	}

	&__options-wrapper {
        flex-basis: 27.5%;
        max-width: 27.5%;
        padding: 20px 30px;
	}
}
</style>
