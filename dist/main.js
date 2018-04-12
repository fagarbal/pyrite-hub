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
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const passport = require("passport");
const passport_github_1 = require("passport-github");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        passport.use(new passport_github_1.Strategy({
            clientID: "418982f1c3f826bfeef7",
            clientSecret: "591e3e6f26bc3a6b314c3c1d405d6fe7c7550c5c",
            callbackURL: "http://localhost:8080/github/callback"
        }, (accessToken, refreshToken, profile, cb) => {
            console.log("accessToken", accessToken);
            console.log("refreshToken", refreshToken);
            console.log("profile", profile);
            return cb(null, profile);
        }));
        yield app.listen(8080);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map