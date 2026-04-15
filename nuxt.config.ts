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
      apiPublicUrl: process.env.NUXT_API_PUBLIC_URL || process.env.NUXT_API_URL,
    }
  },

  app:{
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'fr',
      },
      title: 'Les rendez-vous des formateur·rices',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Les rendez-vous des formateur·rices d\'apprenti·es sont des espaces collaboratifs pensés pour créer une communauté active de professionnel·les en charge des apprenti·es.' },
        { name: 'author', content: 'Fondation ForPro & Fondation Qualife' },
        { name: 'theme-color', content: '#ffffff' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Les rendez-vous des formateur·rices' },
        { property: 'og:title', content: 'Les rendez-vous des formateur·rices' },
        { property: 'og:description', content: 'Les rendez-vous des formateur·rices d\'apprenti·es sont des espaces collaboratifs pensés pour créer une communauté active de professionnel·les en charge des apprenti·es.' },
        { property: 'og:image', content: 'https://rendezvousdesformateurs.ch/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:url', content: 'https://rendezvousdesformateurs.ch' },
        { property: 'og:locale', content: 'fr_CH' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Les rendez-vous des formateur·rices' },
        { name: 'twitter:description', content: 'Les rendez-vous des formateur·rices d\'apprenti·es sont des espaces collaboratifs pensés pour créer une communauté active de professionnel·les en charge des apprenti·es.' },
        { name: 'twitter:image', content: 'https://rendezvousdesformateurs.ch/og-image.png' },
      ],
      link: [
        { rel: 'canonical', href: 'https://rendezvousdesformateurs.ch' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Les rendez-vous des formateur·rices',
            url: 'https://rendezvousdesformateurs.ch',
          }),
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Fondation ForPro & Fondation Qualife',
            url: 'https://rendezvousdesformateurs.ch',
            sameAs: [
              'https://www.for-pro.ch/entreprises',
              'https://www.qualife.ch/actualites/',
            ],
          }),
        },
      ]
    }
  },

  site: {
    url: 'rendezvousdesformateurs.ch',
  },

  modules: ['@nuxtjs/sitemap'],
})
