<template functional>
    <div class="configurator-step">
        <div class="configurator-step__body">
            <slot></slot>
        </div>

        <div class="configurator-step__footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.configurator-step {
    position: relative;
    height: 100%;

    &__footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;

        & > * {
            margin-bottom: 10px;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>
