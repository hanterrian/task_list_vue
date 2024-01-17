// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@pinia/nuxt',
        '@formkit/nuxt',
        '@formkit/auto-animate/nuxt',
        // '@nuxtjs/tailwindcss',
        '@nuxt/ui'
    ],
    tailwindcss: {
        exposeConfig: true,
        viewer: true,
        // and more...
    },
    formkit: {
        // Experimental support for auto loading (see note):
        autoImport: true,
    },
})
