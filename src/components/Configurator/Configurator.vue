<template>
    <div class="configurator">
        <div class="configurator__head">
            <ConfiguratorWizard
                :current-step="currentStep"
                :steps="steps"
            />
        </div>
        <div class="configurator__body">
            <div class="configurator__visualization-wrapper">

            </div>
            <div class="configurator__options-wrapper">
                <!-- ### STEP 1 ### -->
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
                            <DimensionInput
                                v-model.number="door.width"
                                id="door-width"
                                name="door-width"
                                label="Width"
                                unit="cm"
                            />
                            <DimensionInput
                                v-model.number="door.height"
                                id="door-width"
                                name="door-width"
                                label="Height"
                                unit="cm"
                            />
                        </template>
                    </ConfiguratorStepGroup>

                    <template #footer>
                        <Button
                            @click="nextStep"
                            modifier="configurator"
                        >Next step</Button>
                    </template>
                </ConfiguratorStep>

                <!-- ### STEP 2 ### -->
                <ConfiguratorStep v-if="currentStep === 2">
                    <ConfiguratorStepGroup>
                        <template #head>

                        </template>

                        <template #body>

                        </template>
                    </ConfiguratorStepGroup>

                    <ConfiguratorStepGroup>
                        <template #head>

                        </template>

                        <template #body>

                        </template>
                    </ConfiguratorStepGroup>

                    <template #footer>
                        <Button
                            @click="previousStep"
                            modifier="configurator-outlined"
                        >back</Button>

                        <Button
                            @click="nextStep"
                            modifier="configurator"
                        >Next step</Button>
                    </template>
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

// other components
import FormRadio from '@/components/Form/FormRadio.vue';
import DimensionInput from '@/components/DimensionInput.vue';
import Button from '@/components/Button.vue';

export default {
    data: () => ({
        steps: ['choose door', 'choose division', 'choose color'],
        currentStep: 1,
        door: {
            type: 'single',
            width: '',
            height: ''
        }
    }),
    methods: {
        nextStep() {
            if (this.currentStep === this.steps.length) {
                return;
            }
            this.currentStep++;
        },
        previousStep() {
            if (this.currentStep === 1) {
                return;
            }
            this.currentStep--;
        }
    },
    components: {
        ConfiguratorWizard,
        ConfiguratorStep,
        ConfiguratorStepGroup,
        FormRadio,
        DimensionInput,
        Button
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
