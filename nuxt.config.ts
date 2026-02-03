// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  css: [
    '~/assets/_main.scss',
  ],

  ssr: true,

  runtimeConfig: {
    secret_API_AUTH_EMAIL: process.env.API_AUTH_EMAIL,
    secret_API_AUTH_PASSWORD: process.env.API_AUTH_PASSWORD,
    public: {
      apiUrl: process.env.NUXT_API_URL,
    }
  },

  app:{
    baseURL: '/',
    head: {
      title: 'Les rendez-vous des formateurs et formatrices',
      meta: [
        { name: 'description', content: 'Les rendez-vous des formateur·rice·s d’apprenti·es sont des espaces collaboratifs pensés pour créer une communauté active de professionnel·les en charge des apprenti·es.' },
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ]
    }
  },

  site: {
    url: 'rendezvousdesformateurs.ch',
  },

  modules: ['@nuxtjs/sitemap'],
})
