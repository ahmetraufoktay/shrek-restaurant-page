const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  //loader
  module: {
    rules: [
        {
          test: /\.css/,
          use:['style-loader','css-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
    ]
  },
  //loader
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Restaurant Page',
        filename: 'index.html',
        inject: 'body',
        template: './src/index.html'
  })]
};