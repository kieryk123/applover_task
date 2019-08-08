<template>
    <div class="notification">
        <p class="notification__text">{{ text }}</p>
        <button class="notification__close-btn" @click="$emit('close')"></button>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.notification {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 83px;
    background-color: #F24E33;
    padding: 30px;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);

	&__text {
        font-size: 16px;
        color: white;
        margin: 0;
        text-align: center;
	}

	&__close-btn {
        position: absolute;
        top: 30px;
        right: 30px;
        border: 0;
        transform: rotate(45deg);
        background: transparent;
        height: 18px;
        width: 18px;

        &:hover {
            cursor: pointer;
        }

        &:before {
            @include ps;
            height: 2px;
            width: 18px;
            background-color: white;
            transform: rotate(90deg);
            top: 9px;
            left: 0;
        }

        &:after {
            @include ps;
            height: 2px;
            width: 18px;
            background-color: white;
            top: 9px;
            left: 0;
        }
	}
}
</style>
