const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/Logger.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'Log4js.js',
    library: 'Log4js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
