<template>
    <div class="toggle-switch">
        <button
            v-for="button in buttons"
            :class="[
                'toggle-switch__btn',
                value === button.value ? 'toggle-switch__btn--active' : ''
            ]"
            @click="$emit('input', button.value)"
        >{{ button.label }}</button>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            required: true
        },
        leftLabel: {
            type: String,
            required: true
        },
        leftValue: {
            type: [String, Boolean],
            required: true
        },
        rightLabel: {
            type: String,
            required: true
        },
        rightValue: {
            type: [String, Boolean],
            required: true
        },
    },
    data: () => ({

    }),
    computed: {
        buttons() {
            const buttons = Object.freeze({
                LEFT: {
                    label: this.leftLabel,
                    value: this.leftValue
                },
                RIGHT: {
                    label: this.rightLabel,
                    value: this.rightValue
                }
            });

            return Object.values(buttons);
        }
    }
}
</script>

<style lang="scss">
.toggle-switch {
    display: flex;
    justify-content: center;
    width: 72px;
    border: 1px solid #6F91AA;

    &__btn {
        width: 50%;
        font-size: 14px;
        color: #6F91AA;
        padding: 3px 9px;
        border: 1px solid #6F91AA;
        background-color: #CBCBCB;

        &--active {
            background-color: white;
        }
    }
}
</style>
