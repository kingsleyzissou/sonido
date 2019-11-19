require('dotenv').config();

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/config',
    '~/plugins/fragment',
    '~/plugins/dashboard',
    '~/plugins/spinners',
    '~/plugins/transport',
    '~/plugins/bus'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/dotenv'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  /*
  ** Environment variables
  */
  env: {
    SPOTIFY_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    LASTFM_KEY: process.env.LASTFM_KEY,
    SERVER: process.env.SERVER
  },
  /*
  ** Axios configuration
  */
  axios: {
    baseURL: 'https://api.spotify.com/v1/'
  },
  /*
  ** Add route protection
  */
  router: {
    middleware: ['auth'],
    // base: '/sonido/'
  },
  /*
  ** Add authentication config
  */
  auth: {
    redirect: {
      callback: '/callback',
      home: '/'
    },
    strategies: {
      spotify: {
        _scheme: 'oauth2',
        authorization_endpoint: 'https://accounts.spotify.com/authorize',
        userinfo_endpoint: 'https://api.spotify.com/v1/me',
        scope: [
          'user-read-private',
          'user-read-email',
          'playlist-modify-private',
          'playlist-modify-public',
          'playlist-read-collaborative',
          'user-modify-playback-state',
          'user-read-recently-played',
          'user-read-currently-playing',
          'user-read-playback-state',
          'user-follow-modify',
          'user-follow-read',
          'user-top-read'
        ],
        access_type: undefined,
        access_token_endpoint: undefined,
        response_type: 'token',
        token_type: 'Bearer',
        client_id: process.env.SPOTIFY_CLIENT_ID,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET,
        token_key: 'access_token',
        state: 'UNIQUE_AND_NON_GUESSABLE'
      }
    }
  }
}