"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const fs = require("fs");
let ComponentsService = class ComponentsService {
    constructor() {
        this.folder = '../components';
    }
    readFile(version, component) {
        return new Promise((resolve) => {
            fs.readFile(this.folder + '/' + component + '/' + version + '/index.js', (err, file) => {
                if (err)
                    return resolve('console.warn(\'Component ' + component + '@' + version + ' does not exist\');');
                resolve(file);
            });
        });
    }
    getComponents(component) {
        const componentParam = component.split(',');
        const files = componentParam.map((component) => {
            const [componentName, version] = component.split('@');
            if (!version)
                return this.readFile('latest', componentName);
            return this.readFile(version, componentName);
        });
        return Promise.all(files).then((files) => files.join(''));
    }
};
ComponentsService = __decorate([
    common_1.Injectable()
], ComponentsService);
exports.ComponentsService = ComponentsService;
//# sourceMappingURL=components.component.js.map