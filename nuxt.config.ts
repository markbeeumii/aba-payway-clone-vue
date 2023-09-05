// https://nuxt.com/docs/api/configuration/nuxt-config

export default {
  //devtools: { enabled: true },

  app:{
    head:{
      title: "ABA Payway Clone VueJS",
      link:[
        {rel: "icon", type: "image/svg", href: "../payway-logo.svg"}
      ]
    }
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css:[
    '@/styles/main.scss'
  ],
  modules:[
    "@nuxtjs/tailwindcss"
  ]
}
