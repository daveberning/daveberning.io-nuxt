export default {
  mode: 'universal',
  head: {
    title: `Dave Berning | Software Engineer| Cincinnati, OH`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css',
        ssr: false
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,900&display=swap',
        ssr: false
      }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/8347ef088f.js' }
    ]
  },
  loading: { color: '#348479' },
  css: [ '@daveberning/griddle/dist/grid.css', '~/assets/main.scss' ],
  plugins: [
    '~/plugins/global-components'
  ],
  transition: {
    name: 'slide',
    mode: ''
  },
  buildModules: [
    '@nuxt/typescript-build'
  ],
  modules: [ '@nuxtjs/style-resources' ],
  styleResources: {
    scss: [
      '@daveberning/griddle/src/scss/variables.scss'
    ]
  },
  build: {
    extend(config: any, ctx: any) {
    }
  }
}
