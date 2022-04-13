# nuxt-uikit
Configuring nuxtjs for better uikit support.

Like most developer I really LOVE Nuxtjs! and I also really like the UIkit frontend framework. However, while there is a setup guide present for UIkit with Nuxt I realized that whenever the page loads/reloads the icons disappear for a couple seconds while the rest of the content is still present (I assume this is because the icons need JavaScript to work and js only works client side). Now, base on the application you are building you may not want that.

### Here are 2 two methods to solve this issue.
1. Use the UIkit build folder/files. Place the uikit build folder (e.g., uikit-3.7.3) into the "static" folder in yout Nuxtjs project and point to it using Nuxt header config in the "nuxt.config.js" file.

Example:
```
head: {
    link: [
      { rel: "stylesheet", href: "/uikit-3.7.3/css/uikit.min.css" },
    ],
    script: [
      { src: "/uikit-3.7.3/js/uikit.min.js" },
      { src: "/uikit-3.7.3/js/uikit-icons.min.js" },
    ],
   },
```
#### Cons
The cons associated with this method are that you need to download the build files whenever there is a new UIkit release and manually configure it again if you want to update your UIkit version (consider that there may also be breaking changes). In addition, you will have a lot of code in your project that are not being used directly or at all.

The next method helps to fix this to some extent but not completely.

2. You can install UIkit into your project using "yarn add uikit" or "npm install uikit" and only add the js folder from the uikit build into the "static" folder of your Nuxtjs project. Then point to the "uikit.min.js" file and the "uikit-icons.min.js" file. Finally, you will need to get the uikit.css file from the node_modules folder using the css property in the "nuxt.config.js" file.

Your file should look like the following:
```
  head: {
    script: [
      { src: "/uikit-3.7.3/js/uikit.min.js" },
      { src: "/uikit-3.7.3/js/uikit-icons.min.js" },
    ],
  },
  css: ['uikit/dist/css/uikit.css'],
 ```

These are not a perfect fixes, but they work!

### Tutorial Video
https://www.youtube.com/watch?v=2GpmpjEJe28
