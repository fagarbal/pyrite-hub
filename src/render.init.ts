import * as exphbs  from 'express-handlebars';
import * as express from 'express';

export function initRender(app) {
	app.engine('handlebars', exphbs({
		defaultLayout: __dirname + '/templates/default'
	}));

	app.set('views', __dirname + '/templates');
	app.set('view engine', 'handlebars');
	app.use('/static', express.static(process.env.NODE_PATH + '/dist/static'));
}
