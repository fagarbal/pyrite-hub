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
const graphql_1 = require("@nestjs/graphql");
const components = [{
        id: 1,
        tag: 'pyrite-table',
        username: 'fagarbal',
        description: 'Component for create tables',
        likes: 10,
        views: 20
    }, {
        id: 2,
        tag: 'pyrite-form',
        username: 'fagarbal',
        description: 'Component for create forms',
        likes: 54,
        views: 55
    }, {
        id: 3,
        tag: 'pyrite-modal',
        username: 'fagarbal',
        description: 'Component for create modals',
        likes: 4,
        views: 76
    }, {
        id: 4,
        tag: 'pyrite-maps',
        username: 'fagarbal',
        description: 'Component for google maps',
        likes: 36,
        views: 2
    }, {
        id: 5,
        tag: 'pyrite-bootstrap',
        username: 'fagarbal',
        description: 'Component for bootstrap',
        likes: 41,
        views: 67
    }, {
        id: 6,
        tag: 'pyrite-editor',
        username: 'fagarbal',
        description: 'Component for editor',
        likes: 115,
        views: 332
    }];
let ComponentResolver = class ComponentResolver {
    getAll() {
        return components;
    }
};
__decorate([
    graphql_1.Query(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComponentResolver.prototype, "getAll", null);
ComponentResolver = __decorate([
    graphql_1.Resolver('Component')
], ComponentResolver);
exports.ComponentResolver = ComponentResolver;
//# sourceMappingURL=components.resolver.js.map