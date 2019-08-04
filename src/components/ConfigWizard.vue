<template>
    <div class="config-wizard">
        <div
            v-for="(step, index) in steps"
            :key="index"
            :class="[
                'config-wizard__step',
                index === currentStep ? 'config-wizard__step--active' : ''
            ]"
        >
            <div class="config-wizard__step-icon"></div>
            <p class="config-wizard__step-title">step {{ index }}<br>{{ step }}</p>
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
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
        position: absolute;
        content: '';
        top: 23px;
        width: 85%;
        height: 2px;
        background-color: #EBF7FF;
    }

    &__step {
        text-align: center;
        margin: 0 27px;

        &:first-child {
            margin-left: 0;
        }

        &:last-child {
            margin-right: 0;
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
