<template>
    <label class="checkbox" :for="id">
        <input
            class="checkbox__input"
            type="checkbox"
            :id="id"
            :name="id"
            :checked="value"
            @change="$emit('input', $event.target.checked)"
            @blur="$emit('blur')"
        />
        <span class="checkbox__placeholder">{{ placeholder }}</span>
    </label>
</template>

<script>
export default {
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
        placeholder: {
            type: String,
            required: false
        }
    }
}
</script>

<style lang="scss">
.checkbox {
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;

    &__input {
        -webkit-appearance: none;
        width: 25px;
        height: 25px;
        min-width: 25px;
        display: inline-block;
        vertical-align: top;
        position: relative;
        box-sizing: border-box;
        padding: 0;
        outline: 0;
        border: solid 1px #c2c9d6;
        transition: border-color .1s ease-in;

        &:focus {
            border-width: 1px;
        }

        &:before {
            content: '';
            position: absolute;
            top: 3px;
            left: 3px;
            width: 17px;
            height: 17px;
            background: transparent;
        }

        &:checked:before {
            background: #848C93;
        }

        &:hover {
            cursor: pointer;
        }
    }

    &__placeholder {
        padding-left: 15px;
        font-size: 16px;
        font-weight: 400;
    }
}
</style>
