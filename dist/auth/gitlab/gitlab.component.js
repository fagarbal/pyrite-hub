"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const passport_gitlab2_1 = require("passport-gitlab2");
const passport = require("passport");
let GitlabStrategy = class GitlabStrategy extends passport_gitlab2_1.Strategy {
    constructor() {
        super({
            clientID: process.env.GITLAB_CLIENT_ID,
            clientSecret: process.env.GITLAB_CLIENT_SECRET,
            callbackURL: process.env.GITLAB_CALLBACK_URL
        }, (accessToken, refreshToken, profile, done) => __awaiter(this, void 0, void 0, function* () { return yield this.verify(accessToken, refreshToken, profile, done); }));
        passport.use(this);
    }
    verify(accessToken, refreshToken, profile, done) {
        return __awaiter(this, void 0, void 0, function* () {
            done(null, profile);
        });
    }
};
GitlabStrategy = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [])
], GitlabStrategy);
exports.GitlabStrategy = GitlabStrategy;
//# sourceMappingURL=gitlab.component.js.map