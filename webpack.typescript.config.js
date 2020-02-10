// webpack.typescript.config.js
// handles Webpack configuration specifically for JS 
// file generation. Produces app.min.js which should contain 
// Bootstrap JS, our own generated JS and JQuery still needed for 
// Bootstrap as of version 4


const path = require('path');


module.exports = {
  mode: 'development',
  entry: [
    './src/typescript/index.ts'
  ],
  output: {
    filename: 'app.min.js',
    path: path.resolve(__dirname, 'js')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] }
        }
      }
    ]
  }, resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};