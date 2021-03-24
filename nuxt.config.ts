import colors from 'vuetify/es5/util/colors'
import type { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'spa',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s',
    title: 'Fermentgo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/app.scss',
    '~/assets/scss/header.scss',
    '~/assets/scss/message.scss',
    '~/assets/scss/create_post.scss',
    '~/assets/scss/post_card.scss',
    '~/assets/scss/show_post.scss',
    '~/assets/scss/list_post.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/const',
    '~/plugins/myPlugin',
    '~/plugins/postAction',
    '~/plugins/userAction',
    '~/plugins/vee-validate',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      default: 'dark',
      disable: false,
      themes: {
        light: {
          primary: colors.indigo.lighten1,
          accent: colors.grey.darken3,
          secondary: colors.lime.lighten2,
          tertiary: colors.amber.darken3,
          super: colors.pink.lighten3,
          negative: colors.grey.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          backgound: colors.brown.lighten5,
        },
        dark: {
          primary: colors.indigo.lighten1,
          accent: colors.grey.darken3,
          secondary: colors.lime.lighten2,
          tertiary: colors.amber.darken3,
          super: colors.pink.lighten3,
          negative: colors.grey.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          backgound: colors.brown.lighten5,
        },
      },
      options: {
      }
    },
    optionsPath: './vuetify.options.js',
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config: any, ctx: any) {
    },
  }
}

export default config
