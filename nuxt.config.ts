import { repositoryName } from "./slicemachine.config.json";
const year = 60 * 60 * 24 * 365;
const hour = 60 * 60;

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-icons',
    '@nuxtjs/i18n',
    'nuxt-security',
    '@vesp/nuxt-fontawesome',
    [
      'yandex-metrika-module-nuxt3',
      {
        id: import.meta.env.YM_ID,
        webvisor: true,
      }
    ],
    "@nuxtjs/prismic"
  ],

  tailwindcss: {
    exposeConfig: true,
    config: {
      "theme": { "extend": {} },
      "content": {
        "files": [
          "srcDir/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
          "srcDir/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
          "srcDir/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
          "srcDir/plugins/**/*.{js,ts,mjs}",
          "srcDir/slices/**/*.{js,ts,mjs,vue}",
          "srcDir/composables/**/*.{js,ts,mjs}",
          "srcDir/utils/**/*.{js,ts,mjs}",
          "srcDir/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
          "srcDir/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
          "srcDir/app.config.{js,ts,mjs}",
          "srcDir/app/spa-loading-template.html"
        ]
      },
      "plugins": []
    }    
  },

  ssr: true,

  nitro: {
    compressPublicAssets: true,
    routeRules: {
      "/img/**": {
        headers: {
          'cache-control': `public,max-age=${hour},s-maxage=${hour}`,
        }
      },
      "/_nuxt/**": {
        headers: {
          'cache-control': `public,max-age=${hour},s-maxage=${hour}`,
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
  },

  security: {
    headers: {
      contentSecurityPolicy: {
        'base-uri': ["'none'"],
        'default-src' : ["'none'"],
        'connect-src': ["'self'", "https://mc.yandex.com", "https://mc.yandex.ru", "https://ymetrica1.com"],
        'font-src': ["'self'", "https://fonts.googleapis.com", "https://fonts.gstatic.com"],
        'form-action': ["'self'"],
        'frame-ancestors': ["'self'"],
        'frame-src': ["'self'", "https://why-coin-website.prismic.io/", "https://mc.yandex.com", "https://mc.yandex.ru"],
        'img-src': ["'self'", "https://mc.yandex.com", "https://mc.yandex.ru"],
        'manifest-src': ["'self'"],
        'media-src': ["'self'"],
        'object-src': ["'none'"],
        'script-src-attr': ["'unsafe-inline'"],
        'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://fonts.gstatic.com"],
        'script-src': ["'self'", "'strict-dynamic'", "'nonce-{{nonce}}'"],
        'upgrade-insecure-requests': true,
        'worker-src': ["'self'"],
      }
    },
  },

  fontawesome: {
    icons: {
      solid: ['house', 'user']
    }
  },

  prismic: {
    endpoint: repositoryName,
    clientConfig: {
      routes: [
        {
          type: 'testpost',
          path: '/blog/:uid'
        }
      ]
    }
  }
})
