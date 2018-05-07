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
const components_component_1 = require("./components.component");
let ComponentsController = class ComponentsController {
    constructor(componentsService) {
        this.componentsService = componentsService;
    }
    async getComponents(res, componentsParam) {
        res.header('Content-Type', 'application/javascript');
        const components = await this.componentsService.getComponents(componentsParam);
        res.send(components);
    }
};
__decorate([
    common_1.Get(':components'),
    __param(0, common_1.Res()), __param(1, common_1.Param('components')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ComponentsController.prototype, "getComponents", null);
ComponentsController = __decorate([
    common_1.Controller('components'),
    __metadata("design:paramtypes", [components_component_1.ComponentsService])
], ComponentsController);
exports.ComponentsController = ComponentsController;
//# sourceMappingURL=components.controller.js.map