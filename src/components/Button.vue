<template functional>
    <button
        :class="[
            'btn',
            props.modifier ? `btn--${props.modifier}` : '',
            props.disabled ? 'btn--disabled' : '',
            props.small ? 'btn--small' : ''
        ]"
        :type="props.submit ? 'submit' : 'button'"
        :disabled="props.disabled"
        v-on="props.submit ? null : { click: listeners.click }"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        modifier: {
            type: String,
            required: false
        },
        submit: {
            type: Boolean,
            required: false
        },
        disabled: {
            type: Boolean,
            required: false
        },
        small: {
            type: Boolean,
            required: false
        }
    }
}
</script>

<style lang="scss">
.btn {
    display: block;
    width: 100%;
    min-height: 48px;
    border-radius: 6px;
    border: 0;
    box-shadow: none;
    font-size: 18px;
    text-align: center;

    &:hover {
        cursor: pointer;
    }

    &--primary {
        background-color: $btn-color-primary;
        color: white;
    }

    &--secondary {
        background-color: $btn-color-secondary;
        color: white;
    }

    &--configurator {
        background-color: $btn-color-configurator;
        color: white;
        text-transform: uppercase;
        padding: 6px 15px;
        text-align: center;
        font-size: 13px;
        min-height: 0;
        border-radius: 0;
        border: 2px solid $btn-color-configurator;
        min-width: 126px;
        width: auto;
    }

    &--configurator-outlined {
        background-color: $btn-color-configurator-outlined;
        color: $btn-color-configurator;
        text-transform: uppercase;
        padding: 6px 15px;
        text-align: center;
        font-size: 13px;
        min-height: 0;
        border-radius: 0;
        min-width: 126px;
        border: 2px solid $btn-color-configurator;
        width: auto;
    }

    &--disabled {
        opacity: 0.6;

        &:hover {
            cursor: not-allowed;
        }
    }

    &--small {
        width: auto;
        min-height: 32px;
        padding: 5px 8px;
        font-size: 14px;
        border-radius: 3px;
    }
}
</style>
