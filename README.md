# nuxt-uikit
Configuring UIkit for Better NuxtJS Support.

Like most developers I really LOVE VueJS/NuxtJS! and I also really like the UIkit front-end framework. However, while there is a setup guide present for UIkit with NuxtJS I realized that whenever the page loads/reloads the icons disappear for a couple seconds while the rest of the content is still present (I assume this is because the icons need JavaScript to work and JS only works client side). Now, base on the application you are building you may not want that.

This template was created to fix this issue. This is not a perfect solution but it works!

### Instructions
1. Create the Nuxt app.
```
yarn create nuxt-app nuxt-uikit
```
2. Change directory to project folder.
```
cd nuxt-uikit
```
3. Install UIkit.
```
yarn add uikit
```
4. Create a js & uikit folder in the static directory.
```
mkdir -p static/js/uikit
```
5. Copy the uikit.min.js & uikit-icons.min.js files from the node_modules folder to the js/uikit folder in the static directory.
```
cp node_modules/uikit/dist/js/uikit.min.js ./static/js/uikit/
cp node_modules/uikit/dist/js/uikit-icons.min.js ./static/js/uikit/
```
6. Configure the nuxt.config.js file to read uikit.min.js & uikit-icons.min.js from the head as a script.
Your file nuxt.config.js should look like the following:
```
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
  css: ['uikit/dist/css/uikit.css']
}
 ```
 7. Start dev server.
```
yarn dev
```

### Update Packages To Latest
```
yarn post-update
```

### Update UIkit To Latest
```
yarn uikit-update
```

### Install & Use This Template
```
git clone https://github.com/edu-fedorae/nuxt-uikit.git
cd nuxt-uikit
yarn install
yarn dev
```

### Tutorial Video
https://youtu.be/NQPDkOTxHlQ
