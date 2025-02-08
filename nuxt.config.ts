// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
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
  ssr: true
})
