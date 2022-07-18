export default {
  ssr: false,

  target: "static",

  head: {
    titleTemplate: "nuxt-uikit",
    title: "Configuring UIkit for better NuxtJS support",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
    ],
  },
  
  css: ['uikit/dist/css/uikit.css'],

  plugins: [
   { src: '~/plugins/uikit.js' }
  ]
}
