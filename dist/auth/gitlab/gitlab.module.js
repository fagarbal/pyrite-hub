"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const gitlab_controller_1 = require("./gitlab.controller");
const gitlab_component_1 = require("./gitlab.component");
const gitlab_middleware_1 = require("./gitlab.middleware");
let GitlabModule = class GitlabModule {
    configure(consumer) {
        consumer.apply(gitlab_middleware_1.GitlabMiddleware).forRoutes('/auth/gitlab', '/auth/gitlab/callback');
    }
};
GitlabModule = __decorate([
    common_1.Module({
        controllers: [gitlab_controller_1.GitlabController],
        providers: [gitlab_component_1.GitlabStrategy],
    })
], GitlabModule);
exports.GitlabModule = GitlabModule;
//# sourceMappingURL=gitlab.module.js.map