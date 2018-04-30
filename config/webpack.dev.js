const path = require("path")
const webpack = require("webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, "../src", "index.js"),
  ],
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
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
              { loader: "style-loader" },
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
    new webpack.HotModuleReplacementPlugin(),
  ]
}
