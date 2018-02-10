// Iniciar webpack
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: './html/js/index.js',
	output: {
		path: __dirname + '/deploy/assets/',
		filename: 'js/bundle.js'
	},
	devServer: {
		port: 8080,
		contentBase: './deploy'
	},
	plugins: [
		new ExtractTextPlugin('css/app.min.css')
	],
	module: {
		loaders: [{
			test: /.js?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react'],
				plugins: ['transform-object-rest-spread']
			}
		}, {
			test: /.css$/,
			loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
		}]
	}
}