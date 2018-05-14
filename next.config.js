const withSourceMaps = require('@zeit/next-source-maps');
const withTypeScript = require('@zeit/next-typescript');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { ANALYZE } = process.env;

module.exports = withSourceMaps(withTypeScript({
	webpack: function (config) {
		if (ANALYZE) {
			config.plugins.push(new BundleAnalyzerPlugin({
				analyzerMode: 'static',
				analyzerPort: 8888,
				openAnalyzer: true
			}));
		}

		config.module.rules.push({
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
			  fallback: 'style-loader',
			  use: ['css-loader', 'sass-loader']
			})
		});

		config.plugins.push(
			new CopyWebpackPlugin([{
				from: './static',
				to: './static'
			}]));
		
		config.plugins.push(
			new ExtractTextPlugin({
				filename: 'static/style.css'
			}));

		return config;
	}
}));