const dev = process.env.NODE_ENV !== 'production';

module.exports = {
    dev,
	dir: './src/client',
	distDir: '../../.next'
}
