import webpack from 'webpack';
import Config from 'webpack-config';

export default new Config().extend('conf/webpack.base.config.js').merge({
  entry: [
    __dirname + '/../src/index.js'
  ],
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
  },   
  devServer: {
     historyApiFallback: true,
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
        },
        { loader: 'sass-loader' },
      ]
    },
    {
      test   : /\.(jpg|png|gif)$/,
      use: [
        {loader : 'url-loader'}
      ]
    }]
  }
});