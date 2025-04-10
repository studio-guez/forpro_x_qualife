// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/_main.scss',
  ],
  ssr: false,
  app:{
    baseURL: '/forpro_x_qualife/'
  }
})
