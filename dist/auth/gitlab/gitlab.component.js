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
        }, async (accessToken, refreshToken, profile, done) => await this.verify(accessToken, refreshToken, profile, done));
        passport.use(this);
    }
    async verify(accessToken, refreshToken, profile, done) {
        console.log(accessToken, refreshToken, profile);
        done(null, profile);
    }
};
GitlabStrategy = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [])
], GitlabStrategy);
exports.GitlabStrategy = GitlabStrategy;
//# sourceMappingURL=gitlab.component.js.map