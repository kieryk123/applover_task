<template>
    <div class="select">
        <div
            class="select__input"
            @click="listVisibility = !listVisibility"
        >{{ selectedOption.name }}</div>
        <div
            v-if="listVisibility"
            class="select__list"
        >
            <div
                v-for="option in options"
                :key="option.value"
                :class="[
                    'select__list-item',
                    option.value === value ? 'select__list-item--active' : ''
                ]"
                @click="selectOption(option.value)"
            >{{ option.name }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        listVisibility: false
    }),
    props: {
        options: {
            type: Array,
            required: true
        },
        value: {
            required: true
        }
    },
    computed: {
        selectedOption() {
            return this.options.find((el) => el.value === this.value);
        }
    },
    methods: {
        selectOption(value) {
            this.$emit('input', value);
            this.listVisibility = false;
        }
    }
}
</script>

<style lang="scss">
.select {
    position: relative;

	&__input {
        position: relative;
        border: 1px solid #909090;
        border-radius: 3px;
        padding: 7px 27px 7px 16px;
        min-width: 112px;
        max-width: 112px;
        font-size: 14px;
        height: 32px;

        &:hover {
            cursor: pointer;
        }

        &:before {
            @include ps;
            top: 9px;
            right: 10px;
            border-style: solid;
            border-width: 0.25em 0.25em 0 0;
            display: inline-block;
            height: 0.45em;
            transform: rotate(135deg);
            vertical-align: top;
            width: 0.45em;
        }
	}

	&__list {
        position: absolute;
        top: 32px;
        display: block;
        width: 100%;
        margin: 0;
        padding: 0;
        border: 1px solid #909090;
        border-radius: 3px;
        background-color: white;
        list-style: none;
	}

	&__list-item {
        font-size: 14px;
        padding: 7px 16px;

        &:hover {
            cursor: pointer;
        }

        &--active {
            padding-right: 25px;

            &:before {
                position: absolute;
                content: '\2713';
                right: 9px;
            }
        }
	}
}
</style>
