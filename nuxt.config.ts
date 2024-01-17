// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@pinia/nuxt',
        '@formkit/nuxt',
        '@formkit/auto-animate/nuxt',
        '@nuxtjs/tailwindcss'
    ],
    formkit: {
        // Experimental support for auto loading (see note):
        autoImport: true,
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/_global.scss" as *;'
                }
            }
        }
    }
})
