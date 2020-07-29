const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'examples/src/index.tsx'),
  output: {
    path: path.join(__dirname, 'examples/dist'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.webpack.json'
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'examples/src/index.html')
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
}
