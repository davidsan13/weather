const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInjectPlugin = require('html-webpack-inject-plugin').default


module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Testing',
    }),
    new HtmlWebpackPlugin({
      filename: 'other.html',
    }),
    new HtmlWebpackInjectPlugin({
      externals: [
        {
          tagName: 'script',
          attributes: {
            src: 'leaflet.js',
            type: 'text/javascript',
          },
        },
        {
          tagName: 'link',
          attributes: {
            href: 'leaflet-openweathermap.css',
            type: 'text/css',
          },
        },
        {
          tagName: 'script',
          attributes: {
            src: 'leaflet-openweathermap.js',
            type: 'text/javascript',
          },
        },
      ],
      prepend: true, // default is false
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
