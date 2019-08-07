<template functional>
    <header class="app-header">
        <div class="app-header__logo-col">
            <img
                :src="require('@/images/logo.png')"
                :scrset="`${require('@/images/logo.png')} 1x, ${require('@/images/logo@2x.png')} 2x`"
                alt="APPLOVER"
                class="app-header__logo"
            >
        </div>
        <div class="app-header__content-col">
            <slot></slot>
        </div>
    </header>
</template>

<style lang="scss">
.app-header {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px 107px;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);
    background: white;

	&__logo-col {

	}

	&__logo {

	}

	&__content-col {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        & > * {
            margin-left: 10px;
            margin-right: 10px;

            &:last-child {
                margin-right: 0;
            }
        }
	}
}
</style>
