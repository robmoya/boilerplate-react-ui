const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require('webpack')
const path = require('path')

// const isProd = process.env.NODE_ENV === 'production' // true or false
// const cssDev = ['style-loader', 'css-loader', 'sass-loader']
// const cssProd = ExtractTextPlugin.extract({
//   fallback: 'style-loader',
//   use: ['css-loader', 'sass-loader'],
//   publicPath: '/dist'
// })
// var cssConfig = isProd ? cssProd : cssDev

module.exports = {
  entry: path.resolve(__dirname, "src/js/main.js"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    hot: true,
    open: true,
    port: 8080
  },
  resolve: {
		extensions: [".js", ".jsx"],
	},
  plugins: [
		new CopyWebpackPlugin([
			{
				context: path.resolve(__dirname, "src/"),
				from: "index.html",
				to: path.resolve(__dirname, "dist"),
			},
		]),
		new webpack.DefinePlugin({
			PRODUCTION: process.env.NODE_ENV === "production"
		}),
    // new HtmlWebpackPlugin({
    //   title: 'Project Demo',
    //   hash: true,
    //   template: './src/index.html'
    // }),
    // new ExtractTextPlugin({
    //   filename: 'app.css',
    //   disable: !isProd,
    //   allChunks: true
    // }),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin()
	],
  module: {
    rules: [
      {
        test: /\.js$|.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"],
      },
      // {
      //   test: /\.scss$/,
      //   use: cssConfig
      // },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|jp(e*)g|JPG|svg)$/,
        // use: [{
        //   loader: "url-loader",
        //   options: {
        //     limit: 8000,
        //     name: "images/[hash]-[name].[ext]"
        //   }
        // }]
        use: [
            'file-loader?name=[name].[ext]&outputPath=images/&publicPath=images/',
            'image-webpack-loader'
        ]
      },

    ],
  },
}
