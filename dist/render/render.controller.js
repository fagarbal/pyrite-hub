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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const render_component_1 = require("./render.component");
let RenderController = class RenderController {
    constructor(renderService) {
        this.renderService = renderService;
    }
    index(req, res) {
        return this.renderService.next.render(req, res, '/', {
            cards: Array(15).fill(0)
        });
    }
    component(req, res) {
        return this.renderService.next.render(req, res, '/component', {
            name: req.params.name
        });
    }
};
__decorate([
    common_1.Get('/'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], RenderController.prototype, "index", null);
__decorate([
    common_1.Get('/component/:name'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], RenderController.prototype, "component", null);
RenderController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [render_component_1.RenderService])
], RenderController);
exports.RenderController = RenderController;
//# sourceMappingURL=render.controller.js.map