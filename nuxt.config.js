export default {
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
    script: [
      { src: "/js/uikit/uikit.min.js" },
      { src: "/js/uikit/uikit-icons.min.js" },
    ],
  },
  css: ['uikit/dist/css/uikit.css'],
  // plugins: [
  //  { src: '~/plugins/uikit.js', ssr: false }
  // ]
}
