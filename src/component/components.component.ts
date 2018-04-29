import { Component } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Component()
export class ComponentsService {
    private readonly components: {} = {};
    private readonly folder = process.env.NODE_PATH + '/components';

    private readFile(version, component) {
        return new Promise((resolve) => {
            fs.readFile(this.folder + '/' + component + '/' + version + '/index.js', (err, file) => {
                if (err) return resolve('console.warn(\'Component ' + component + '@' + version + ' does not exist\');');
                resolve(file);
            });
        });
    }

    getComponents(component): Promise<string> {
        const componentParam = component.split(',');

        const files = componentParam.map((component) => {
            const [componentName, version] = component.split('@');

            if (!version) return this.readFile('latest', componentName);

            return this.readFile(version, componentName);
        });

        return Promise.all(files).then((files) => files.join(''));
    }
}