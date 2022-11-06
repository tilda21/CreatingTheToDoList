const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './index.js', // specifies the main file (the entry) of our application
  mode: 'development',
  output: { // specifies where Webpack will put it's files after bundling and we specify the path and the file name of that Webpack bundle
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  target: 'web', // specifies where our app will run
  devServer: { // specifies our development server settings
    port: '5000', // specifies the port our app will run on once started
    static: {
      directory: path.join(__dirname, 'public') // specifies the directory webpack will use to serve static files
    },
    open: true, // automatically open the browser after it had bundled our files
    hot: true, // enables webpack Hot module replacement exchanges, adds or removes modules while an application is running, without a full reload
    liveReload: true, // automatically update the app as you make changes
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // tells which Webpack files to consider when building our app - you can specify files with several extensions
  },
  module: {
    rules: [ // where we specify rules about how Webpack will handle different files when building our app
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader', //  allows transpiling JavaScript files using Babel and webpack
      },
      {
        test: /\.css$/, // Here we use two loaders, style-loader and css-loader, to handle our CSS files
        use: [
          {
            loader: 'style-loader' // injects CSS into the DOM
          },
          {
            loader: 'css-loader', // interprets @import and url() like import/require() and will resolve them
          }
        ]
      }
    ],
  },
  plugins: [ // where we specify plugins to use with webpack
    new HtmlWebpackPlugin({ // we will need HTMLWebpackPlugin which will generate html files for our bundles
      template: path.join(__dirname, 'public', 'index.html') // tell it to use our index.html file in the public folder as a template
    })
  ]
};