if (process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv');
    dotenv.load();
}

require('./main');
