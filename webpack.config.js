const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const dirname = path.dirname(__dirname)

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: path.resolve(dirname, 'src'),
        use: 'babel-loader',
      },
      {
        test: /\.(css)$/,
        include: path.resolve(dirname, 'src'),
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    new MiniCssExtractPlugin(),
  ],
}
