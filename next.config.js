const withSourceMaps = require('@zeit/next-source-maps');
const withTypeScript = require('@zeit/next-typescript');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

const { ANALYZE } = process.env;

module.exports = withSourceMaps(withTypeScript({
	distDir: '../.next',
	webpack: function (config) {
		if (ANALYZE) {
			config.plugins.push(new BundleAnalyzerPlugin({
				analyzerMode: 'static',
				analyzerPort: 8888,
				openAnalyzer: true,
			}));
		}

		config.module.rules.push({
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
			  fallback: 'style-loader',
			  use: ['css-loader', 'sass-loader'],
			})
		});

		config.plugins.push(
			new ExtractTextPlugin({
				filename: 'static/style.css',
				ignoreOrder: true,
				allChunks: true,
			})
		);

		config.plugins.push(
			new CopyWebpackPlugin([{
				from: './static',
				to: './static',
			}]));

		Object.assign(config.resolve.alias, {
			'@components': path.resolve(__dirname, 'public/components/'),
			'@queries': path.resolve(__dirname, 'public/queries/'),
			'@utils': path.resolve(__dirname, 'public/utils/'),
		});

		return config;
	}
}));