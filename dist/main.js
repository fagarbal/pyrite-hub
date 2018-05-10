"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const session = require("express-session");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const passport_init_1 = require("./passport.init");
const compression = require("compression");
async function bootstrap() {
    dotenv.load();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(compression());
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true
    }));
    passport_init_1.initPassport(app);
    await app.listen(process.env.PORT || 8080);
}
bootstrap();
//# sourceMappingURL=main.js.map