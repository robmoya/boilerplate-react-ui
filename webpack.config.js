var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack')
var path = require('path')

var isProd = process.env.NODE_ENV === 'production' // true or false
var cssDev = ['style-loader', 'css-loader', 'sass-loader']
var cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader'],
  publicPath: '/dist'
})
var cssConfig = isProd ? cssProd : cssDev

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   use: 'eslint-loader',
      //   exclude: /node_modules/
      // },
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
              'file-loader?name=[name].[ext]&outputPath=images/&publicPath=images/',
              'image-webpack-loader'
          ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    open: true,
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project Demo',
      hash: true,
      template: './src/index.html'
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: !isProd,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
