var HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
     entry: './src/entry.js',
     output: {
         path: './dist',
         filename: 'bundle.js'
     },
     plugins: [new HtmlWebPackPlugin({
         template: 'src/index.html',
         inject: 'body',
         filename: 'index.html'
     })]
 };