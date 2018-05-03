"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const session = require("express-session");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const passport_init_1 = require("./passport.init");
const render_init_1 = require("./render.init");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv.load();
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.use(session({
            secret: process.env.SESSION_TOKEN,
            resave: true,
            saveUninitialized: true
        }));
        passport_init_1.initPassport(app);
        render_init_1.initRender(app);
        yield app.listen(8080);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map