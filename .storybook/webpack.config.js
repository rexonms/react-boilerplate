const path = require('path');
const postCSSConfig = require('./../config/postcss.config');
const localIdentName = '[name]__[local]___[hash:base64:5]';
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => postCSSConfig,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName,
            },
          },
          require.resolve('sass-loader'),
          {
            loader: require.resolve('postcss-loader'),
            options: {
              plugins: () => postCSSConfig,
            },
          },
        ],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:9009' })
  ]
};
