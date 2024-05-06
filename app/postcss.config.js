// webpack.config.js or next.config.js
module.exports = {
    // other configurations...
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
          ],
        },
        // other rules...
      ],
    },
    // other configurations...
  };
  