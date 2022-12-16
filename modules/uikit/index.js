const path = require("path");

export default async function () {
  const { nuxt } = this

  this.addPlugin({ 
    src: path.resolve(__dirname, "plugin.js"), 
    fileName: 'uikit.js',
    ssr: false 
  });
}