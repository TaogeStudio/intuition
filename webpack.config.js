module.exports = {
  entry: './app/index',
  output: {
    filename: './app/dist/bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
};
