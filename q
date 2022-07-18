{
  "name": "nuxt-uikit",
  "dependencies": {
    "nuxt": "latest",
    "uikit": "latest"
  },
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start",
    "uikit-update": "yarn add uikit && cp node_modules/uikit/dist/js/uikit.min.js ./static/js/uikit/ && cp node_modules/uikit/dist/js/uikit-icons.min.js ./static/js/uikit/",
    "post-update": "yarn upgrade --latest && cp node_modules/uikit/dist/js/uikit.min.js ./static/js/uikit/ && cp node_modules/uikit/dist/js/uikit-icons.min.js ./static/js/uikit/"
  }
}
