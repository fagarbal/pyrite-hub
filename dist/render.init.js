"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exphbs = require("express-handlebars");
const express = require("express");
function initRender(app) {
    app.engine('handlebars', exphbs({
        defaultLayout: __dirname + '/templates/default'
    }));
    app.set('views', __dirname + '/templates');
    app.set('view engine', 'handlebars');
    app.use('/static', express.static(process.env.NODE_PATH + '/dist/static'));
}
exports.initRender = initRender;
//# sourceMappingURL=render.init.js.map