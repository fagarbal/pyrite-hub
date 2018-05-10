"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const components_controller_1 = require("./components.controller");
const components_component_1 = require("./components.component");
const components_resolver_1 = require("./components.resolver");
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    common_1.Module({
        controllers: [components_controller_1.ComponentsController],
        providers: [components_component_1.ComponentsService, components_resolver_1.ComponentResolver],
    })
], ComponentsModule);
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=components.module.js.map