const path = require('path');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: [
    './src/js/index.js',
    './src/sass/index.scss'
  ],
  output: {
    filename: 'app.min.js',
    path: path.resolve(__dirname, 'js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] }
        }
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: { outputPath: "../style", name: "[name].min.css"}
          },
          "sass-loader"
        ]
      }
    ]
  }
};