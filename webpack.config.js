const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const images = require('file-loader');
const CopyWebpackPlugin= require('copy-webpack-plugin');
module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js',
    roomDetail: './src/roomDetail.js',
    loginPage: './src/loginPage.js',
    regPage: './src/regPage.js',
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
        include: /fonts/,
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
            loader: 'file-loader',
                        options: {
                            name: './img/[name].[ext]',
                            context: path.resolve(__dirname, "src/"),
                            // outputPath: 'dist/',
                            publicPath: '../',
                            useRelativePaths: true
                        }
          }]
      },
    
    ]
  },
  devServer: {
    stats: 'errors-only'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyWebpackPlugin([{
      from: './src/fonts',
      to: './fonts'
    }//,
    // {
    //   from: './src/img',
    //   to: './img'
    // }
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
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      template: './src/loginPage.pug',
      filename: 'loginPage.html',
      chunks: ['loginPage']
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      template: './src/regPage.pug',
      filename: 'regPage.html',
      chunks: ['regPage']
    })
    
  ]
};
