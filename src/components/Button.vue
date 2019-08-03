<template functional>
    <button
        :class="['btn', props.modifier ? `btn--${props.modifier}` : '']"
        :type="props.submit ? 'submit' : 'button'"
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
}
</style>
