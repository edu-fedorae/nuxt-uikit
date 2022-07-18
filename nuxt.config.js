export default {
  ssr: false, // Remove to set rendering on server-side
  /*
   * Note: Icons will load after the page is rendered if set to server-side!
   */

  target: "static", // Remove to set target as 'server'

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
