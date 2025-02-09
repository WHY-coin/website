// https://nuxt.com/docs/api/configuration/nuxt-config

const year = 60 * 60 * 24 * 365;

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icons',
    '@nuxtjs/i18n',
    [
      'yandex-metrika-module-nuxt3',
      {
        id: '99845495',
        webvisor: true,
      }
    ]
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  ssr: true,
  nitro: {
    routeRules: {
      "/img/**": {
        headers: {
          'cache-control': `public,max-age=${year},s-maxage=${year}`,
        }
      },
      "/_nuxt/**": {
        headers: {
          'cache-control': `public,max-age=${year},s-maxage=${year}`,
        }
      },
    }
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'ru', language: 'ru-RU' }
    ],
    defaultLocale: 'en',
  }
})
