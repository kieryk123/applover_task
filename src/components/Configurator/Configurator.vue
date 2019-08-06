<template>
    <div class="configurator">
        <div class="configurator__head">
            <ConfiguratorWizard
                :current-step="currentStep"
                :steps="steps"
            />
        </div>
        <div class="configurator__body">
            <div class="configurator__visualisation-wrapper">
                <ConfiguratorVisualisation :configuration="configuration" />
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
                                v-model="configuration.type"
                                value-to-set="single"
                            >Single door</FormRadio>
                            <FormRadio
                                id="double-door-type"
                                name="door-type"
                                v-model="configuration.type"
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
                                v-model.number="configuration.width"
                                id="door-width"
                                name="door-width"
                                label="Width"
                                unit="cm"
                            />
                            <DimensionInput
                                v-model.number="configuration.height"
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
                            Door division
                        </template>

                        <template #body>
                            <CounterInput
                                v-model.number="configuration.beams"
                                id="door-beams"
                                name="door-beams"
                                label="Number of beams"
                            />
                            <CounterInput
                                v-model.number="configuration.posts"
                                id="door-posts"
                                name="door-posts"
                                label="Number of posts"
                            />
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

                <!-- ### STEP 3 ### -->
                <ConfiguratorStep v-if="currentStep === 3">
                    <ConfiguratorStepGroup>
                        <template #head>
                            Choose color
                        </template>

                        <template #body>
                            <ColorPicker
                                v-model="configuration.color"
                                :colors="colors"
                            />
                        </template>
                    </ConfiguratorStepGroup>

                    <template #footer>
                        <Button
                            @click="previousStep"
                            modifier="configurator-outlined"
                        >back</Button>
                        <Button
                            @click="finishConfiguration"
                            modifier="configurator"
                        >Finish</Button>
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
import ConfiguratorVisualisation from '@/components/Configurator/ConfiguratorVisualisation.vue';

// other components
import FormRadio from '@/components/Form/FormRadio.vue';
import DimensionInput from '@/components/DimensionInput.vue';
import CounterInput from '@/components/CounterInput.vue';
import Button from '@/components/Button.vue';
import ColorPicker from '@/components/ColorPicker.vue';

export default {
    data: () => ({
        steps: ['choose door', 'choose division', 'choose color'],
        currentStep: 1,
        configuration: {
            type: 'single',
            width: 120,
            height: 250,
            beams: 4,
            posts: 2,
            color: '#000000'
        },
        colors: [
            {
                name: 'Black',
                value: '#000000'
            },
            {
                name: 'Gray',
                value: '#797474'
            },
            {
                name: 'White',
                value: '#F4F2F2'
            },
        ]
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
        },
        finishConfiguration() {
            console.log({...this.configuration});
        }
    },
    components: {
        ConfiguratorWizard,
        ConfiguratorStep,
        ConfiguratorStepGroup,
        ConfiguratorVisualisation,
        FormRadio,
        DimensionInput,
        CounterInput,
        Button,
        ColorPicker
    }
}
</script>

<style lang="scss">
.configurator {
    max-width: 890px;
    width: 100%;

    &__head {
        padding-bottom: 20px;
	}

	&__body {
        display: flex;
        flex-direction: row;
	}

	&__visualisation-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 70%;
        max-width: 70%;
        min-height: 475px;
        border: 1px solid #E6E6E6;
        padding: 25px;
	}

	&__options-wrapper {
        flex-basis: 30%;
        max-width: 30%;
        padding: 20px 30px;
	}
}
</style>
