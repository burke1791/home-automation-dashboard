const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var config = {
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  target: 'electron-renderer',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ],
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.(c|le)ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]__[hash:base64:5]'
              }
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 3000,
    compress: true,
    open: true,
    contentBase: path.join(__dirname, 'public')
  }
}

module.exports = (env, argv) => {
  config.entry = './src/index.js';
  return config;
}