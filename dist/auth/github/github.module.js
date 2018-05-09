"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const github_controller_1 = require("./github.controller");
const github_component_1 = require("./github.component");
const github_middleware_1 = require("./github.middleware");
let GithubModule = class GithubModule {
    configure(consumer) {
        consumer.apply(github_middleware_1.GithubMiddleware).forRoutes('/auth/github', '/auth/github/callback');
    }
};
GithubModule = __decorate([
    common_1.Module({
        controllers: [github_controller_1.GithubController],
        providers: [github_component_1.GithubStrategy]
    })
], GithubModule);
exports.GithubModule = GithubModule;
//# sourceMappingURL=github.module.js.map