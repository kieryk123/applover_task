<template>
    <div class="configurator">
        <div class="configurator__head">
            <ConfiguratorWizard
                :current-step="currentStep"
                :steps="steps"
            />
        </div>
        <div class="configurator__body">
            <div
                :class="[
                    'configurator__visualisation-wrapper',
                    threeDimensionView ? 'configurator__visualisation-wrapper--3d' : ''
                ]"
            >
                <ToggleSwitch
                    v-model="threeDimensionView"
                    class="configurator__switch"
                    left-label="3D"
                    :left-value="true"
                    right-label="2D"
                    :right-value="false"
                />
                <ConfiguratorVisualisation :configuration="configuration" />
            </div>
            <div class="configurator__options-wrapper">
                <!-- ### STEP 1 ### -->
                <ConfiguratorStep v-if="currentStep === 1">
                    <ConfiguratorStepGroup>
                        <template #head>
                            <span>{{ $t('door_type') }}</span>
                        </template>

                        <template #body>
                            <FormRadio
                                id="single-door-type"
                                name="door-type"
                                v-model="configuration.type"
                                value-to-set="single"
                            >{{ $t('single_door') }}</FormRadio>
                            <FormRadio
                                id="double-door-type"
                                name="door-type"
                                v-model="configuration.type"
                                value-to-set="double"
                            >{{ $t('double_door') }}</FormRadio>
                        </template>
                    </ConfiguratorStepGroup>

                    <ConfiguratorStepGroup>
                        <template #head>
                            <span>{{ $t('door_size') }}</span>
                        </template>

                        <template #body>
                            <DimensionInput
                                v-model.number="configuration.width"
                                id="door-width"
                                name="door-width"
                                :label="$t('width')"
                                unit="cm"
                                :min="100"
                                :max="160"
                            />
                            <DimensionInput
                                v-model.number="configuration.height"
                                id="door-height"
                                name="door-height"
                                :label="$t('height')"
                                unit="cm"
                                :min="220"
                                :max="300"
                            />
                        </template>
                    </ConfiguratorStepGroup>

                    <template #footer>
                        <Button
                            @click="nextStep"
                            modifier="configurator"
                        >{{ $t('next_step') }}</Button>
                    </template>
                </ConfiguratorStep>

                <!-- ### STEP 2 ### -->
                <ConfiguratorStep v-if="currentStep === 2">
                    <ConfiguratorStepGroup>
                        <template #head>
                            {{ $t('door_division') }}
                        </template>

                        <template #body>
                            <CounterInput
                                v-model.number="configuration.beams"
                                id="door-beams"
                                name="door-beams"
                                :label="$t('number_of_beams')"
                                :min="2"
                                :max="4"
                            />
                            <CounterInput
                                v-model.number="configuration.posts"
                                id="door-posts"
                                name="door-posts"
                                :label="$t('number_of_posts')"
                                :min="2"
                                :max="4"
                            />
                        </template>
                    </ConfiguratorStepGroup>

                    <template #footer>
                        <Button
                            @click="previousStep"
                            modifier="configurator-outlined"
                        >{{ $t('back') }}</Button>
                        <Button
                            @click="nextStep"
                            modifier="configurator"
                        >{{ $t('next_step') }}</Button>
                    </template>
                </ConfiguratorStep>

                <!-- ### STEP 3 ### -->
                <ConfiguratorStep v-if="currentStep === 3">
                    <ConfiguratorStepGroup>
                        <template #head>
                            {{ $t('choose_color') }}
                        </template>

                        <template #body>
                            <ColorPicker
                                v-model="configuration.color"
                                :colors="colors"
                            />
                        </template>
                    </ConfiguratorStepGroup>

                    <ConfiguratorStepGroup>
                        <template #head>
                            {{ $t('share_configuration') }}
                        </template>

                        <template #body>
                            <Button
                                @click="createLinkToShare"
                                modifier="configurator"
                            >{{ $t('share') }}</Button>
                        </template>
                    </ConfiguratorStepGroup>

                    <template #footer>
                        <Button
                            @click="previousStep"
                            modifier="configurator-outlined"
                        >{{ $t('back') }}</Button>
                        <Button
                            @click="finishConfiguration"
                            modifier="configurator"
                        >{{ $t('finish') }}</Button>
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
import ToggleSwitch from '@/components/ToggleSwitch.vue';

export default {
    created() {
        this.checkQueryParams();
    },
    data: () => ({
        currentStep: 1,
        configuration: {
            type: 'single',
            width: 120,
            height: 250,
            beams: 4,
            posts: 2,
            color: '#000000'
        },
        threeDimensionView: false
    }),
    computed: {
        steps() {
            return [
                this.$i18n.t('choose_door'),
                this.$i18n.t('choose_division'),
                this.$i18n.t('choose_color')
            ];
        },
        colors() {
            return [
                {
                    name: this.$i18n.t('black'),
                    value: '#000000'
                },
                {
                    name: this.$i18n.t('gray'),
                    value: '#797474'
                },
                {
                    name: this.$i18n.t('white'),
                    value: '#F4F2F2'
                },
            ];
        }
    },
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
        },
        createLinkToShare() {
            const { type, width, height, beams, posts, color } = this.configuration;
            const currentLink = location.protocol + '//' + location.host + location.pathname;
            const linkToShare = `${currentLink}?type=${type}&width=${width}&height=${height}&beams=${beams}&posts=${posts}&color=${color.substr(1)}`;
            navigator.clipboard.writeText(linkToShare).then(() => alert(`${this.$i18n.t('link_copied')} :)`));
        },
        checkQueryParams() {
            const query = this.$route.query;
            const isQueryEmpty = Object.getOwnPropertyNames(query).length === 0;
            if (isQueryEmpty) {
                return;
            }
            const configuration = {
                type: query.type,
                width: Number(query.width),
                height: Number(query.height),
                beams: Number(query.beams),
                posts: Number(query.posts),
                color: `#${query.color}`
            };
            this.configuration = configuration;
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
        ColorPicker,
        ToggleSwitch
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
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 70%;
        max-width: 70%;
        min-height: 475px;
        border: 1px solid #E6E6E6;
        padding: 25px;

        &--3d {
            background-image: url('../../images/room.png');
            background-position: -140px -109px;
        }
	}

    &__switch {
        position: absolute;
        top: 25px;
        right: 25px;
    }

	&__options-wrapper {
        flex-basis: 30%;
        max-width: 30%;
        padding: 20px 30px;
	}
}
</style>

<i18n>
{
    "en-US": {
        "choose_door": "Choose door",
        "choose_division": "Choose division",
        "choose_color": "Choose color",
        "single_door": "Single door",
        "double_door": "Double door",
        "door_type": "Door type",
        "door_size": "Door size",
        "width": "Width",
        "height": "Height",
        "next_step": "Next step",
        "back": "Back",
        "door_division": "Door division",
        "number_of_beams": "Number of beams",
        "number_of_posts": "Number of posts",
        "choose_color": "Choose color",
        "black": "Black",
        "gray": "Gray",
        "white": "White",
        "share_configuration": "Share configuration",
        "share": "Share",
        "finish": "Finish",
        "link_copied": "Link copied to clipboard"
    },
    "pl-PL": {
        "choose_door": "Wybierz drzwi",
        "choose_division": "Wybierz podział",
        "choose_color": "Wybierz kolor",
        "single_door": "Pojedyncze drzwi",
        "double_door": "Podwójne drzwi",
        "door_type": "Typ drzwi",
        "door_size": "Rozmiar drzwi",
        "width": "Szerokość",
        "height": "Wysokość",
        "next_step": "Dalej",
        "back": "Cofnij",
        "door_division": "Podział drzwi",
        "number_of_beams": "Liczba belek",
        "number_of_posts": "Liczba słupków",
        "choose_color": "Wybierz kolor",
        "black": "Czarny",
        "gray": "Szary",
        "white": "Biały",
        "share_configuration": "Udostępnij konfigurację",
        "share": "Udostępnij",
        "finish": "Zakończ",
        "link_copied": "Link został skopiowany do schowka"
    }
}
</i18n>
