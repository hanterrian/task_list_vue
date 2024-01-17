// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@pinia/nuxt',
        '@formkit/nuxt',
        '@formkit/auto-animate/nuxt',
        '@nuxtjs/tailwindcss'
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    formkit: {
        // Experimental support for auto loading (see note):
        autoImport: true,
    },
    css: ['~/assets/css/main.css'],
})
