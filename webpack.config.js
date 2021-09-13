const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: {
    home: [
      './src/app.js',
      './src/styles/styles.css'
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'styles.css',
  })]
}