<template>
    <div class="dimension-input">
        <label :for="id" class="dimension-input__label">{{ label }}</label>
        <div class="dimension-input__wrapper">
            <input
                type="number"
                :id="id"
                :name="name"
                inputmode="numeric"
                class="dimension-input__input"
                v-model.number="localValue"
                @blur="onBlur"
                :min="min"
                :max="max"
            >
            <span class="dimension-input__unit">{{ unit }}</span>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.localValue = this.value;
    },
    props: {
        value: {
            required: true
        },
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: false
        },
        unit: {
            type: String,
            required: true
        },
        min: {
            type: Number,
            required: false
        },
        max: {
            type: Number,
            required: false
        }
    },
    data: () => ({
        localValue: 0
    }),
    methods: {
        onBlur() {
            this.$emit('blur');
            this.localValue = this.value;
        }
    },
    watch: {
        localValue() {
            let value = this.localValue;
            value = Number(value);

            if (value <= this.min) {
                value = this.min;
            }

            if (value >= this.max) {
                value = this.max;
            }

            this.$emit('input', value);
        }
    }
}
</script>

<style lang="scss">
.dimension-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

	&__label {
        font-size: 14px;
        color: $font-color-primary;
        padding-right: 25px;
	}

	&__input {
        height: 24px;
        -webkit-appearance: none;
        -moz-appearance: textfield;
        max-width: 44px;
        width: 100%;
        min-width: 44px;
        border: 1px solid #A8A5A5;
        color: $font-color-primary;
        font-size: 12px;
        padding: 4px 7px;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
	}

	&__unit {
        font-size: 12px;
        color: $font-color-primary;
        padding-left: 5px;
	}
}

</style>
