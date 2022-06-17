path = require('path');

/*
  use dotenv-webpack to have an access to the process.env in es6
  after creating the const Dotenv use it inside plugin in this current file.
  then we can use directly process.env in every files without importing dotenv
 */
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: { app: ['./src/index.js'] },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8000,
  },
  plugins: [new Dotenv()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
    },
  },
};
