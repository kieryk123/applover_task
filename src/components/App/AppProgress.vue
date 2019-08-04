<template>
    <aside class="progress">
        <div class="progress__title">Processing...</div>
        <div class="progress__bar">
            <div class="progress__bar-line" :style="`width: ${value}%`"></div>
            <span class="progress__bar-percentage">{{ value }}%</span>
        </div>
    </aside>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            required: true
        }
    }
}
</script>

<style lang="scss">
.progress {
    position: fixed;
    z-index: 11;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: rgba(#ADB2B5, 0.83);

    &__title {
        font-size: 24px;
        color: white;
        margin-top: 0;
        margin-bottom: 45px;
    }

	&__bar {
        position: relative;
        max-width: 500px;
        width: 100%;
        height: 32px;
        border: 1px solid white;
        border-radius: 3em;
	}

	&__bar-line {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0%;
        background-color: white;
        border: 7px solid rgba(#ADB2B5, 0.83);
        border-radius: 3em;
        transition: .2s width ease-in-out;
	}

	&__bar-percentage {
        position: absolute;
        top: 7px;
        right: 18px;
        font-size: 14px;
        color: white;
	}
}

</style>
