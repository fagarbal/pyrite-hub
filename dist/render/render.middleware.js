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
const render_component_1 = require("./render.component");
let RenderMiddleware = class RenderMiddleware {
    constructor(renderService) {
        this.renderService = renderService;
    }
    resolve() {
        return (req, res) => {
            console.log(req.originalUrl);
            return this.renderService.handle(req, res, req.originalUrl);
        };
    }
};
RenderMiddleware = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [render_component_1.RenderService])
], RenderMiddleware);
exports.RenderMiddleware = RenderMiddleware;
//# sourceMappingURL=render.middleware.js.map