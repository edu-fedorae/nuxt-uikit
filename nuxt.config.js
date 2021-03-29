export default {
  head: {
    titleTemplate: "nuxt-uikit",
    title: "Configuring nuxtjs for better uikit support",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
    ],
    script: [
      { src: "/uikit/js/uikit.min.js" },
      { src: "/uikit/js/uikit-icons.min.js" },
    ],
  },
  css: ['uikit/dist/css/uikit.css'],
  // plugins: [
  //   { src: '~/plugins/uikit.js', ssr: false }
  // ]
}
