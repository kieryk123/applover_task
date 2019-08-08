<template>
    <div class="form-radio">
        <input
            class="form-radio__input"
            :id="id"
            type="radio"
            :name="name"
            :checked="isChecked"
            @change="onChange"
            @blur="$emit('blur')"
        >
        <label
            :for="id"
            class="form-radio__label"
        >
            <slot></slot>
        </label>
    </div>
</template>

<script>
export default {
    model : {
        prop: 'checked',
        event: 'change'
    },
    props: {
        id: {
            type: String,
            required: true
        },
        value: {
            type: [Boolean, String]
        },
        name: {
            type: String,
            required: true
        },
        valueToSet: {
            required: true
        }
    },
    computed: {
        isChecked() {
            return this.$attrs.checked === this.valueToSet;
        }
    },
    methods: {
        onChange() {
            this.$emit('change', this.valueToSet);
        }
    }
}
</script>

<style lang="scss">
.form-radio {
    min-height: 25px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &__input {
        &:not(:checked) + .form-radio__label:after {
            opacity: 0;
            -webkit-transform: scale(0);
            transform: scale(0);
        }

        &:checked + .form-radio__label:after {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
        }

        &:checked,
        &:not(:checked) {
            position: absolute;
            left: -9999px;
        }
    }

    &__label {
        position: relative;
        padding-left: 23px;
        cursor: pointer;
        line-height: 20px;
        display: inline-block;
        font-size: 14px;
        color: $font-color-primary;

        &:before {
            @include ps;
            left: 0;
            top: 0;
            width: 12px;
            height: 12px;
            border: 3px solid #CDDBE5;
            border-radius: 100%;
            background: #fff;
        }

        &:after {
            @include ps;
            width: 8px;
            height: 8px;
            background: #6991B2;
            top: 5px;
            left: 5px;
            border-radius: 100%;
            -webkit-transition: all 0.1s ease;
            transition: all 0.1s ease;
        }
    }
}
</style>
