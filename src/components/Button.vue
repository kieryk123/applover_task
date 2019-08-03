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
        background-color: #1DE278;
        color: white;
    }

    &--secondary {
        background-color: #77779D;
        color: white;
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
