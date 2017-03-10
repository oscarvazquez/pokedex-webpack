const path = require("path");
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
}

const commonConfig = {

  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { 
        test: /\.js$/,
        include: PATHS.app,
        exclude: /(node_modules)/,
        use: "babel-loader"
      },
    ],
  },
  devServer: {
    hot: true,
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    stats: 'errors-only',
    historyApiFallback: true,
    overlay: {
        errors: true,
        warnings: true,
    },  
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Webpack demo',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],  
};

module.exports = function(env){
    return commonConfig;
}