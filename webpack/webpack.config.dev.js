const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const rootDir = path.resolve(__dirname, '..')

module.exports = {
  entry: {
    app: [
      path.resolve(rootDir, 'src/index'),
    ],
  },

  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: '[name].js',
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', ['css?sourceMap', 'sass?sourceMap']),
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'babel',
        ],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)$/,
        loader: 'url',
        query: {
          limit: 1,
          name: '/font/[name].[ext]',
        },
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        loader: 'url',
        query: {
          limit: 1,
          name: '/img/[name].[ext]',
        },
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('dev'),
      },
    }),

    new CleanPlugin(['dist'], {
      root: rootDir,
    }),

    new ExtractTextPlugin('[name].css', { allChunks: true }),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
  },
}
