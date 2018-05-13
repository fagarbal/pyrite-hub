const withSourceMaps = require('@zeit/next-source-maps');
const withTypeScript = require('@zeit/next-typescript');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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

		config.plugins.push(
			new CopyWebpackPlugin([{
				from: './static',
				to: './static'
			}]))

		return config;
	}
}))
