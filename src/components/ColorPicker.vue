<template>
    <div class="color-picker">
        <div
            v-for="(color, index) in colors"
            :key="index"
            class="color-picker__box"
        >
            <div
                class="color-picker__color"
                :style="`background-color: ${color.value}`"
            ></div>
            <FormRadio
                :id="color.name"
                name="door-color"
                v-model="choosenColor"
                :value-to-set="color.value"
            >{{ color.name }}</FormRadio>
        </div>
    </div>
</template>

<script>
import FormRadio from '@/components/Form/FormRadio.vue';

export default {
    created() {
        this.choosenColor = this.value;
    },
    props: {
        value: {
            required: true
        },
        colors: {
            type: Array,
            required: true
        }
    },
    data: () => ({
        choosenColor: ''
    }),
    watch: {
        choosenColor() {
            this.$emit('input', this.choosenColor);
        }
    },
    components: {
        FormRadio
    }
}
</script>

<style lang="scss">
.color-picker {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

	&__box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
	}

	&__color {
        border-radius: 100%;
        width: 35px;
        height: 35px;
        background-color: black;
        margin-bottom: 5px;
	}
}

</style>
