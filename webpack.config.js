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
    path: distPath, // output entry to ./dist
    filename: "index.[name].js", //[name] is a chunk name from entry object properties
    pathInfo: true,
    publicPath: ''
  },
  module: {
    loaders: [
      // {
      //   test: /\.tsx?$/,
      //   loaders: ['babel', 'ts-loader'],
      //   babelrc: true,
      //   include: srcPath
      // },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        useBabel: true
      }
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
    // More: http://webpack.github.io/docs/configuration.html#resolve-modulesdirectories
  },

  // Dev Server option is used to configure WebpackDevServer
  devServer: {
    contentBase: './dist', //content will be served from ./dist
    stats: {
      colors: true
    }
  },
  cache: true
};
