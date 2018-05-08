"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const session = require("express-session");
const next = require("next");
const express = require("express");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const passport_init_1 = require("./passport.init");
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({
    dev
});
exports.nextApp = nextApp;
async function bootstrap() {
    dotenv.load();
    await nextApp.prepare();
    const server = express();
    const app = await core_1.NestFactory.create(app_module_1.AppModule, server);
    // app.setGlobalPrefix('api');
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true
    }));
    passport_init_1.initPassport(app);
    await app.init();
    await app.listen(process.env.PORT || 8080);
}
bootstrap();
//# sourceMappingURL=main.js.map