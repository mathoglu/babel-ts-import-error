// Global hint: "Keep in mind that you don’t need to write pure JSON into the configuration. Use any JavaScript you want. It’s just a node.js module…"
var path               = require('path'),
    srcPath            = path.join(__dirname, 'src'),
    distPath           = path.join(__dirname, 'dist'),
    webpack            = require('webpack'),
    HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.join(srcPath, 'index.tsx'),
  },
  output: {
    path: distPath,
    filename: "index.[name].js",
    pathInfo: true,
    publicPath: ''
  },
  module: {
    loaders: [
      // Normal loader
      {
        test: /\.tsx?$/,
        loaders: ['babel', 'ts-loader'],
        babelrc: true,
        include: srcPath
      }

      // Awesome loader
      // {
      //   test: /\.tsx?$/,
      //   loader: 'awesome-typescript-loader',
      //   useBabel: true
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'index.html')
    })
  ],
  resolve: {
    root: srcPath,
    extensions: ['','.js', 'ts', 'tsx', '.jsx', '.scss'],
    modulesDirectories: ['node_modules']
  },
  devServer: {
    contentBase: './dist',
    stats: {
      colors: true
    }
  },
  cache: true
};
