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
      title: 'Weather',
    }),
    // new HtmlWebpackInjectPlugin({
    //   externals: [
    //     {
    //       tagName: 'link',
    //       attributes: {
    //         href: 'https://unpkg.com/leaflet@1.9.2/dist/leaflet.css',
    //         type: 'text/css',
    //       },
    //     },
    //     {
    //       tagName: 'script',
    //       attributes: {
    //         src: 'https://unpkg.com/leaflet@1.9.2/dist/leaflet.js',
    //         type: 'text/javascript',
    //       },
    //     },
        // {
        //   tagName: 'script',
        //   attributes: {
        //     src: 'leaflet-openweathermap.js',
        //     type: 'text/javascript',
        //   },
        // },
    //   ],
    //   prepend: true, // default is false
    // }),
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
