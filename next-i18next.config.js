module.exports = {
    i18n: {
        defaultLocale: 'es',
        fallbackLng: ['en', 'es'],
        locales: ['en', 'es'],
        detection: {
            caches: ['cookie'],
            cookieSameSite: 'strict',
            lookupCookie: 'locale',
            order: ['header', 'cookie'],
        },
    },
}
