const webpack = require('webpack')

module.exports = {
	entry: './html/js/index.jsx',
	output: {
		path: __dirname + '/deploy/',
		publicPath: '/deploy/',
		filename: 'bundle.js'
	},
	devServer: {
		port: 8080,
		contentBase: './deploy/'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{
			test: /.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react'],
				plugins: ['transform-object-rest-spread']
			}
		}]
	}
}