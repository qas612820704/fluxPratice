var webpack = require("webpack");
module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'whatwg-fetch'],
    app: __dirname + '/js/src/',
  },
  output: {
    path: __dirname + '/js/dist/',
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ]
};

