const path = require("path")
const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const enableBundleAnalyzer = process.env.ENABLE_ANALYZER === 'true';

module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, "../src", "index.js"),
  ],
  mode: "production",
  devtool: 'source-map',
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../build"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "build",
    historyApiFallback: true,
    overlay: true,
    hot: true
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
          },
          {
            test: /\.css$/,
            use: [
              { loader: MiniCssExtractPlugin.loader },
              { loader: "css-loader" }
            ]
          },
          {
            test: /\.(png|jp(e*)g|svg)$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 10000,
                  name: "data/[name].[ext]"
                }
              }
            ]
          },
          {
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../public', 'index.html'),
    }),
    new OptimizeCssAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css",
      chunkFilename: "[id].[hash:8].css"
    }),
    new MomentLocalesPlugin(),
    new ManifestPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: enableBundleAnalyzer === true ? 'static' : 'disabled',
      openAnalyzer: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}
