const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, '..', 'src'),
  entry: {
    Log4js: ['./Log4js.js']
  },
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    libraryTarget: 'umd',
    library: 'Log4js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
}
