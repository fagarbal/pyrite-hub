const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	entry: './src/public/app.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader'
			},
			{
				test: /\.(scss|sass)$/,
				loader: 'style!css!sass'
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist/static'),
		publicPath: './static'
	},
	plugins: [
		new CopyWebpackPlugin([
			{ from: './src/public/images', to: './images' },
			{ from: './src/public/templates', to: '../templates' }
		]),
		new HtmlWebpackPlugin({
			filename: '../templates/default.handlebars',
			template: './src/public/templates/default.handlebars',
			hash: true
		})
	]
};
