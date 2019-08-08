module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/styles/assets/_mixins.scss";
                    @import "@/styles/assets/_variables.scss";
                `
            }
        }
    },
    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: true
        }
    }
}
