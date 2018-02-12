import webpack from 'webpack';
import Config from 'webpack-config';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default new Config().extend('conf/webpack.base.config.js').merge({
  output: {
    filename: 'bundle.min.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader","sass-loader"]
      })
    },
    {
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      use: [{loader:'url-loader',
        options:{
          outputPath: 'img/'
        }
      }],
    }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    }),
    new ExtractTextPlugin("bundle.css"),
  ]
});