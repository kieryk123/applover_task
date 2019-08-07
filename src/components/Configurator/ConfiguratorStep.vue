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

<style lang="scss">
.configurator-step {
    position: relative;
    height: 100%;

    &__footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: row;
        width: 100%;

        & > * {
            margin-right: 14px;

            &:last-child {
                margin-right: 0;
            }
        }
    }
}
</style>
