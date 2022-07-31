# nuxt-uikit
Configuring UIkit for Better NuxtJS SSR Support.

Like most developers we really LOVE VueJS/NuxtJS! and we also really like the UIkit front-end framework. However, while there is a setup guide present for UIkit with NuxtJS we realized that whenever the page loads/reloads on SSR mode the icons disappear for a couple seconds while the rest of the content is still present (This is because the icons need JavaScript to work and JS only works client side). Now, base on the application you are building you may not want that.

A simple fix is to set `ssr:false` in your `nuxt.config.js` file.  
See [client branch](https://github.com/edu-fedorae/nuxt-uikit/tree/client-side)

However, what if you do want an SSR app with UIkit? 

After a very long period of trying to develop an efficient solution for this issue. This is the best solution we've come up with so far.

# Instructions for Creating NuxtJS SSR + UIkit App
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
5. Copy the uikit.js & uikit-icons.js files from the node_modules folder to the js/uikit folder in the static directory.
```
cp node_modules/uikit/dist/js/uikit.js ./static/js/uikit/
cp node_modules/uikit/dist/js/uikit-icons.js ./static/js/uikit/
```
6. Add an update script to simplify step 5 on package version change.
Your package.json file should look like the following:
```json
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
    "uikit-update": "yarn add uikit && cp node_modules/uikit/dist/js/uikit.js ./static/js/uikit/ && cp node_modules/uikit/dist/js/uikit-icons.js ./static/js/uikit/"
  }
}
```
7. Configure the nuxt.config.js file to read uikit.js & uikit-icons.js from the head as a script.
Your nuxt.config.js file should look like the following:
```js
export default {
  head: {
    titleTemplate: "nuxt-uikit",
    title: "Configuring UIkit for Better NuxtJS SSR Support",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
    ],
    script: [
      { src: "/js/uikit/uikit.js" },
      { src: "/js/uikit/uikit-icons.js" },
    ],
  },
  css: ['uikit/dist/css/uikit.css']
}
 ```

8. Start dev server.
```
yarn dev
```

### Update UIkit To Latest
```
yarn uikit-update
```

# Template Installation
### Install & Use This Template
```
git clone https://github.com/edu-fedorae/nuxt-uikit.git
cd nuxt-uikit
yarn install
yarn dev
```

### Watch Tutorial Video
https://youtu.be/E8rrF6pKgXk