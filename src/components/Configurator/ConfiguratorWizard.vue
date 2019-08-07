<template>
    <div class="config-wizard">
        <div
            v-for="(step, index) in steps"
            :key="index"
            :class="[
                'config-wizard__step',
                (index + 1) === currentStep ? 'config-wizard__step--active' : ''
            ]"
        >
            <div class="config-wizard__step-icon"></div>
            <p class="config-wizard__step-title">{{ $t('step') }} {{ index + 1 }}<br>{{ step }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        steps: {
            type: Array,
            required: true
        },
        currentStep: {
            type: Number,
            required: true
        }
    }
}
</script>

<style lang="scss">
.config-wizard {
    display: flex;
    justify-content: center;
    align-items: center;

    &__step {
        position: relative;
        z-index: 1;
        text-align: center;
        margin: 0 27px;

        &:before {
            position: absolute;
            z-index: -1;
            content: '';
            top: 23px;
            left: -70%;
            width: 100%;
            height: 2px;
            background-color: #EBF7FF;
        }

        &:after {
            position: absolute;
            z-index: -1;
            content: '';
            top: 23px;
            right: -70%;
            width: 100%;
            height: 2px;
            background-color: #EBF7FF;
        }

        &:first-child {
            margin-left: 0;

            &:before {
                display: none;
            }
        }

        &:last-child {
            margin-right: 0;

            &:after {
                display: none;
            }
        }

        &--active {
            .config-wizard__step-icon {
                background-color: #95A3AD;

                &:before {
                    background-color: white;
                }
            }
        }
    }

	&__step-icon {
        position: relative;
        display: inline-block;
        width: 46px;
        height: 46px;
        background-color: #CDDBE5;
        margin-bottom: 11px;
        border-radius: 100%;

        &:before {
            position: absolute;
            content: '';
            top: calc(50% - 3px);
            left: calc(50% - 3px);
            width: 6px;
            height: 6px;
            background-color: #6991B2;
            border-radius: 100%;
        }
	}

	&__step-title {
        font-size: 10px;
        font-weight: 700;
        text-transform: uppercase;
        margin-top: 0;
        margin-bottom: 0;
        text-align: center;
        line-height: 1.35;
	}
}
</style>

<i18n>
{
    "en-US": {
        "step": "Step"
    },
    "pl-PL": {
        "step": "Krok"
    }
}
</i18n>
