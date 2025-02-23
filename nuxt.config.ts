// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vesp/nuxt-fontawesome',
  ],

  fontawesome: {
    icons: {
      solid: ['cog', 'circle', 'check', 'calendar'],
      regular: ['user']
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/variables.scss" as *;'
        }
      }
    }
  },

  css: [
    '@/assets/styles/index.scss'
  ],

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    baseURL: '/homeCraft/',
    buildAssetsDir: 'assets'
  },

  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
})