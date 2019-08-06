<template>
    <table class="visualisation">
        <tbody>
            <tr class="visualisation__head">
                <td></td>
                <td colspan="2" class="visualisation__ruler-wrapper visualisation__ruler-wrapper--top">
                    <span class="visualisation__ruler visualisation__ruler--top">{{ doubleDoorWidth }}</span>
                </td>
            </tr>
            <tr class="visualisation__body">
                <td class="visualisation__ruler-wrapper visualisation__ruler-wrapper--left">
                    <span class="visualisation__ruler visualisation__ruler--left">{{ configuration.height }}</span>
                </td>
                <td>
                    <table
                        class="visualisation__door"
                        :style="doorStyleProperties"
                    >
                        <tbody>
                            <tr v-for="beam in configuration.beams" class="visualisation__door-beam">
                                <td v-for="post in configuration.posts" class="visualisation__door-post"></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td v-if="isTypeDouble">
                    <table
                        class="visualisation__door"
                        :style="doorStyleProperties"
                    >
                        <tbody>
                            <tr v-for="beam in configuration.beams" class="visualisation__door-beam">
                                <td v-for="post in configuration.posts" class="visualisation__door-post"></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr class="visualisation__footer">
                <td></td>
                <td class="visualisation__ruler-wrapper visualisation__ruler-wrapper--bottom">
                    <span class="visualisation__ruler visualisation__ruler--bottom">{{ configuration.width }}</span>
                </td>
                <td v-if="isTypeDouble" class="visualisation__ruler-wrapper visualisation__ruler-wrapper--bottom">
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
        },
        doubleDoorWidth() {
            return this.isTypeDouble ? (this.configuration.width * 2) :  this.configuration.width;
        }
    },
}
</script>

<style lang="scss">
.visualisation {
    border-collapse: collapse;

	&__head {

	}

    &__ruler-wrapper {
        position: relative;
        text-align: center;

        &--top,
        &--bottom {
            border-left: 1px solid black;
            border-right: 1px solid black;

            &:before {
                position: absolute;
                content: '';
                top: calc(50% - 0.5px);
                left: 0;
                height: 1px;
                width: 100%;
                background-color: black;
            }
        }

        &--left {
            border-top: 1px solid black;
            border-bottom: 1px solid black;

            &:before {
                position: absolute;
                content: '';
                top: 0;
                left: calc(50% - 0.5px);
                height: 100%;
                width: 1px;
                background-color: black;
            }
        }
    }

	&__ruler {
        position: relative;
        display: inline-block;
        font-size: 12px;
        border: 1px solid #848C93;
        padding: 1px 9px;
        background-color: white;
	}

    &__door {
        table-layout: fixed;
        border: 0;
        max-width: 100%;
        border-collapse: collapse;
    }

    &__door-beam {
        border-bottom: 7px solid;

        &:first-of-type {
            border-top: 7px solid;
        }
    }

    &__door-post {
        border-right: 7px solid;

        &:first-of-type {
            border-left: 7px solid;
        }
    }
}
</style>
