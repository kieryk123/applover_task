<template>
    <table class="visualisation">
        <tbody>
            <tr class="visualisation__head">
                <td></td>
                <td colspan="2" class="visualisation__ruler-wrapper">
                    <span class="visualisation__ruler visualisation__ruler--top">{{ configuration.width }}</span>
                </td>
            </tr>
            <tr class="visualisation__body">
                <td class="visualisation__ruler-wrapper">
                    <span class="visualisation__ruler visualisation__ruler--left">{{ configuration.height }}</span>
                </td>
                <td>
                    <table
                        class="door"
                        :style="doorStyleProperties"
                    >
                        <tbody>
                            <tr v-for="beam in configuration.beams" class="door__beam">
                                <td v-for="post in configuration.posts" class="door__post"></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td v-if="isTypeDouble">
                    <table
                        class="door"
                        :style="doorStyleProperties"
                    >
                        <tbody>
                            <tr v-for="beam in configuration.beams" class="door__beam">
                                <td v-for="post in configuration.posts" class="door__post"></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr class="visualisation__footer">
                <td></td>
                <td class="visualisation__ruler-wrapper">
                    <span class="visualisation__ruler visualisation__ruler--bottom">{{ configuration.width }}</span>
                </td>
                <td v-if="isTypeDouble" class="visualisation__ruler-wrapper">
                    <span class="visualisation__ruler visualisation__ruler--bottom">{{ configuration.width }}</span>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        configuration: {
            type: Object,
            required: true
        }
    },
    computed: {
        isTypeDouble() {
            return this.configuration.type === 'double' ? true : false;
        },
        doorStyleProperties() {
            return {
                width: `${this.configuration.width}px`,
                height: `${this.configuration.height}px`,
                color: this.configuration.color
            }
        }
    },
}
</script>

<style lang="scss">

</style>
