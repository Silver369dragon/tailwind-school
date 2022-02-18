// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        intro: resolve(__dirname, './intro.html'),
        mainChararcter: resolve(__dirname, './mainChararcter.html')
      }
    }
  }
})