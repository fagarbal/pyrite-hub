if (process.env.NODE_ENV !== 'producrion') {
    const dotenv = require('dotenv');
    dotenv.load();
}

require('./main');
