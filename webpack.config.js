const path = require('path');
// const BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
  entry: {
		app: path.resolve(__dirname, 'src/client/scripts/entry.jsx')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
				test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader", query: {
					presets: ['es2015', 'stage-0', 'stage-2', 'react'],
					plugins: ["transform-runtime"],
					comments: false
				}
			},
			{ test: /\.css$/, use: [ { loader: 'style-loader' }, { loader: 'css-loader' } ] },
			{ test: /\.json$/, loader: 'json-loader' },
			{ test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, loader: 'url-loader?limit=100000' }
    ]
  },
	plugins: [
		// new BabiliPlugin({
		// 	removeConsole: false,
		// 	removeDebugger: false
		// })
	],
  resolve: {
		symlinks: false,
    extensions: ['.js', '.json', '.jsx']
  }
};
