const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        include: path.resolve(__dirname, 'src/app'),
      },
    ],
  },
};
