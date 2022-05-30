path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: { app: ['./src/index.js'] },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    fallback: { path: require.resolve('path-browserify') },
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
      serveIndex: true,
    },
    compress: true,
    open: true,
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
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
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
