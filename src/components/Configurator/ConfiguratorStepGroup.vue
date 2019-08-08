<template functional>
    <div class="configurator-step-group">
        <div class="configurator-step-group__head">
            <slot name="head"></slot>
        </div>
        <div class="configurator-step-group__body">
            <slot name="body"></slot>
        </div>
    </div>
</template>

<style lang="scss">
.configurator-step-group {
    margin-bottom: 20px;

	&__head {
        font-size: 14px;
        color: $font-color-primary;
        border-bottom: 1px solid rgba(#848C93, 0.2);
        padding-bottom: 5px;

        & > span,
        & > div,
        & > p {
            display: block;
        }
	}

	&__body {
        padding: 20px 0;
	}
}
</style>
