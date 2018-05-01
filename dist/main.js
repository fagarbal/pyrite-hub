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
const exphbs = require("express-handlebars");
const express = require("express");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const passport_init_1 = require("./passport.init");
dotenv.load();
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        passport_init_1.initPassport(app);
        app.engine('handlebars', exphbs({
            defaultLayout: __dirname + '/templates/default'
        }));
        app.set('views', __dirname + '/templates');
        app.set('view engine', 'handlebars');
        app.use('/static', express.static(__dirname + '/static'));
        yield app.listen(8080);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map