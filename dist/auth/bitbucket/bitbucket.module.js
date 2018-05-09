"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const bitbucket_controller_1 = require("./bitbucket.controller");
const bitbucket_component_1 = require("./bitbucket.component");
const bitbucket_middleware_1 = require("./bitbucket.middleware");
let BitbucketModule = class BitbucketModule {
    configure(consumer) {
        consumer.apply(bitbucket_middleware_1.BitbucketMiddleware).forRoutes('/auth/bitbucket', '/auth/bitbucket/callback');
    }
};
BitbucketModule = __decorate([
    common_1.Module({
        controllers: [bitbucket_controller_1.BitbucketController],
        providers: [bitbucket_component_1.BitbucketStrategy]
    })
], BitbucketModule);
exports.BitbucketModule = BitbucketModule;
//# sourceMappingURL=bitbucket.module.js.map