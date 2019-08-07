<template>
    <div class="counter-input">
        <label :for="id" class="counter-input__label">{{ label }}</label>
        <div class="counter-input__wrapper">
            <input
                type="number"
                :id="id"
                :name="name"
                inputmode="numeric"
                class="counter-input__input"
                ref="input"
                v-model.number="counter"
                @blur="$emit('blur')"
                :min="min"
                :max="max"
            >
            <button
                class="counter-input__btn"
                @click="incrementCounter"
            >+</button>
            <button
                class="counter-input__btn"
                @click="decrementCounter"
            >-</button>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.counter = this.value;
    },
    data: () => ({
        counter: 0
    }),
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
        min: {
            type: Number,
            required: false
        },
        max: {
            type: Number,
            required: false
        }
    },
    methods: {
        incrementCounter() {
            this.counter++;
        },
        decrementCounter() {
            this.counter--;
        }
    },
    watch: {
        counter() {
            let value = this.counter;
            value = Number(value);

            if (value <= this.min) {
                value = this.min;
            }

            if (value >= this.max) {
                value = this.max;
            }

            this.counter = value;
            this.$emit('input', value);
        }
    }
}
</script>

<style lang="scss">
.counter-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

	&__label {
        font-size: 14px;
        color: #848C93;
        padding-right: 14px;
	}

	&__input {
        height: 24px;
        -webkit-appearance: none;
        -moz-appearance: textfield;
        max-width: 24px;
        min-width: 24px;
        width: 100%;
        border: 1px solid #A8A5A5;
        color: #848C93;
        font-size: 12px;
        padding: 4px 7px;
        margin-right: 4px;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
	}

	&__btn {
        background-color: #CDDBE5;
        color: #848C93;
        border: 0;
        box-shadow: none;
        height: 24px;
        width: 24px;
        font-size: 12px;
        margin-right: 4px;
        text-align: center;

        &:hover {
            cursor: pointer;
        }

        &:last-child {
            margin-right: 0;
        }
	}
}

</style>
