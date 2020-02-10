// webpack.sass.config.js
// handles Webpack configuration specifically for SASS -> CSS 
// file generation. Produces app.min.css

//const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './src/sass/app.scss'
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '../style', name: '[name].min.css'
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
};