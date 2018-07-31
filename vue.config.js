// vue.config.js
module.exports = {
  // options...
  baseUrl: process.env.NODE_ENV === 'production'
    ? './'
    : './',

  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'src/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page'
    }
  },
  outputDir: './cordova-story-v3/www',
  transpileDependencies: ['async-boot']
}
