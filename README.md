# nuxt-uikit
Configuring  NuxtJS for Better UIkit Support.

Like most developer I really LOVE NuxtJS! and I also really like the UIkit frontend framework. However, while there is a setup guide present for UIkit with Nuxt I realized that whenever the page loads/reloads the icons disappear for a couple seconds while the rest of the content is still present (I assume this is because the icons need JavaScript to work and JS only works client side). Now, base on the application you are building you may not want that.

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
Your file should look like the following:
```
  head: {
    script: [
      { src: "/js/uikit/uikit.min.js" },
      { src: "/js/uikit/uikit-icons.min.js" },
    ],
  },
  css: ['uikit/dist/css/uikit.css'],
 ```

### Note
You will need to copy the updated code for each new version of UIkit to the static/js/uikit directory / associated files.

### Tutorial Video

