const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	entry: ['webpack/hot/poll?100', './server/server.ts'],
	watch: true,
	target: 'node',
	mode: 'development',
	externals: [
		nodeExternals({
			whitelist: ['webpack/hot/poll?100'],
		}),
	],
	module: {
		rules: [
			{
				test: /.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CopyWebpackPlugin([ { from: './static', to: '../.next/static' } ])
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'server.js',
	},
};