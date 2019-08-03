<template>
    <input
        class="form-input"
        :id="id"
        :name="name"
        :type="type"
        :value="value"
        :placeholder="placeholder"
        :inputmode="inputmode"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('blur')"
    />
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
        type: {
            type: String,
            required: true
        },
        inputmode: {
            type: String,
            required: false
        },
        placeholder: {
            type: String,
            required: false
        }
    }
}
</script>

<style lang="scss">
.form-input {
    width: 100%;
    height: 48px;
    padding: 12px 23px;
    box-shadow: none;
    border: 1px solid #C9C6C6;
    border-radius: 6px;
    margin-top: 34px;
    color: #A5A1A1;
    font-size: 18px;
    font-weight: 400;
}
</style>
