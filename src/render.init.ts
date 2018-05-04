import * as exphbs  from 'express-handlebars';
import * as express from 'express';
import * as path from 'path';

export function initRender(app) {

	app.engine('handlebars', exphbs({
		defaultLayout: process.env.NODE_PATH + '/templates/default'
	}));

	app.set('views', process.env.NODE_PATH + '/templates');
	app.set('view engine', 'handlebars');
	app.use('/static', express.static(process.env.NODE_PATH + '/dist/static'));
}
