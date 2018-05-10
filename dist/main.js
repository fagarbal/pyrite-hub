"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const session = require("express-session");
const express = require("express");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const passport_init_1 = require("./passport.init");
const compression = require("compression");
const https = require("https");
const http = require("http");
const fs = require("fs");
const options = {
    cert: fs.readFileSync('./certs/fullchain1.pem', 'utf8'),
    key: fs.readFileSync('./certs/privkey1.pem', 'utf8')
};
async function bootstrap() {
    dotenv.load();
    const expressApp = express();
    const httpsServer = https.createServer(options, expressApp);
    const httpServer = http.createServer(expressApp);
    const app = await core_1.NestFactory.create(app_module_1.AppModule, expressApp);
    app.use(compression());
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true
    }));
    passport_init_1.initPassport(app);
    await app.init();
    httpServer.listen(process.env.PORT);
    httpsServer.listen(process.env.SSL_PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map