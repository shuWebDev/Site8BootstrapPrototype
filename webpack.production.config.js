// webpack.production.config.js
// Webpack configuration for production build
// Builds all assets, TS/JS -> app.min.js
// SCSS -> CSS for push to prod and uses Webpack 
// built-in optimizations where applicable

const path = require('path');


module.exports = {
  mode: 'production',
  entry: [
    './src/typescript/index.ts',
    './src/sass/index.scss'
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
  }, resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};