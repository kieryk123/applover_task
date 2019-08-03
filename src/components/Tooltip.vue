<template>
    <div :class="['tooltip', this.size ? `tooltip--${this.size}` : '']">
        <div class="tooltip__activator-wrapper">
            <slot
                name="activator"
                :toggle="toggle"
            ></slot>
        </div>
        <div v-if="visible" class="tooltip__box">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        action: {
            type: Function,
            required: false
        },
        size: {
            type: String,
            required: false
        }
    },
    data: () => ({
        visible: false
    }),
    methods: {
        toggle() {
            if (this.action) {
                this.action();
            }
            this.visible = !this.visible;
        }
    }
}
</script>

<style lang="scss">
.tooltip {
    position: relative;
    display: inline-block;

	&__activator-wrapper {
        display: inline-block;
	}

	&__box {
        position: absolute;
        right: 20%;
        top: 100%;
        background-color: white;
        min-width: 150px;
        padding: 15px 20px;
        box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);
        font-size: 14px;

        &:before {
            position: absolute;
            content: '';
            top: -7px;
            right: 10%;
            width: 0;
            height: 0;
            border-left: 9px solid transparent;
            border-right: 9px solid transparent;
            border-bottom: 7px solid white;
        }

        & > p {
            margin: 3px 0;
        }
	}

    &--big {
        .tooltip__box {
            min-width: 300px;
        }
    }
}
</style>
