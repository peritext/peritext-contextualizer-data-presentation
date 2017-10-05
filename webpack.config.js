var nodeExternals = require('webpack-node-externals');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "/dist/[name].css"
});

module.exports = {
  entry: './src/index',
  output: {
    filename: './dist/index.js',
    libraryExport: "default",
    library: 'peritext-contextualizer-data-presentation',
    libraryTarget: 'commonjs2'
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc. 
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules\//,
        include: __dirname
      },
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("css-loader")
      },
      {
          test: /\.scss$/,
          use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development 
                fallback: "style-loader"
            })
      },
      {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
              'file-loader?hash=sha512&digest=hex&name=dist/[hash].[ext]', 
              {
                loader: 'image-webpack-loader',
                query: {
                  // progressive: true,
                  // optimizationLevel: 4,
                  // interlaced: false,
                  gifsicle: {
                    interlaced: false
                  },
                  optipng: {
                    optimizationLevel: 4,
                  },
                  pngquant: {
                    quality: '75-90',
                    speed: 3,
                  },
                },
              }]
        }
    ]
  },
  plugins: [
    extractSass
  ]
}