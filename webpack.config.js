// webpack v4
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const images = require('file-loader');
const CopyWebpackPlugin= require('copy-webpack-plugin');
module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js',
    roomDetail: './src/roomDetail.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
            pretty: true
        }
      
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        exclude: /img/,
        use: [
                {
                    loader: 'file-loader?name=./fonts/[name]/[name].[ext]'
                }
                
            ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /fonts/,
        use: [
          {
            loader: 'file-loader?name=./img/[name].[ext]',
            
            // loader: 'file-loader',
            // options: {
            //   name: '[path][name].[ext]',
            //   // publicPath: '..' // use relative path
            // }
          }]
      },
    
    ]
  },
  devServer: {
    stats: 'errors-only'
  },
  plugins: [
    // new ExtractTextPlugin(
    //   {filename: 'style.[hash].css', disable: false, allChunks: true }
    // ),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyWebpackPlugin([{
      from: './src/fonts',
      to: './fonts'
    },
    {
      from: './src/img',
      to: './img'
    }
    ]),
    new HtmlWebpackPlugin({
      inject: 'head',
      template: './src/search.pug',
      filename: 'search.html',
      chunks: ['search']
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      template: './src/index.pug',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      template: './src/roomDetail.pug',
      filename: 'roomDetail.html',
      chunks: ['roomDetail']
    })
    // new webpack.ProvidePlugin({
    //   $: "./src/js/jquery-1.12.4.min.js",
    //   jQuery: "./src/js/jquery-1.12.4.min.js",
    //   "window.jQuery": "./src/js/jquery-1.12.4.min.js"
    // })
    //new WebpackMd5Hash()
  ]
};
