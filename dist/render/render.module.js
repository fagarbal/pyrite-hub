"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const render_controller_1 = require("./render.controller");
const render_component_1 = require("./render.component");
const render_middleware_1 = require("./render.middleware");
const common_1 = require("@nestjs/common");
let RenderModule = class RenderModule {
    configure(consumer) {
        consumer.apply(render_middleware_1.RenderMiddleware).forRoutes('/_next', '/static');
    }
};
RenderModule = __decorate([
    common_1.Module({
        controllers: [render_controller_1.RenderController],
        providers: [render_component_1.RenderService]
    })
], RenderModule);
exports.RenderModule = RenderModule;
//# sourceMappingURL=render.module.js.map