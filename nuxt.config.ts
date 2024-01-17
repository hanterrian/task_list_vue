// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@pinia/nuxt',
        '@formkit/nuxt',
        '@nuxtjs/tailwindcss'
    ],
    formkit: {
        // Experimental support for auto loading (see note):
        autoImport: true
    }
})
