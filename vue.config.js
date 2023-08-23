// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   publicPath: '/brunch-cloud/'
// })

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/brunch-cloud/'
    : '/'
}
