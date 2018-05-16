import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class FileComponentService {
	private readonly folder = './components';
	private loader: string;

	private readFile(version, component) {
		return new Promise(resolve => {
			fs.readFile(
				this.folder + '/' + component + '/' + version + '/index.js',
				(err, file) => {
					if (err)
						return resolve(
							"console.warn('Component " +
								component +
								'@' +
								version +
								" does not exist');",
						);
					resolve(file);
				},
			);
		});
	}

	getComponents(component): Promise<string> {
		const componentParam = component.split(',');

		const files = componentParam.map(component => {
			const [componentName, version] = component.split('@');

			if (!version) return this.readFile('latest', componentName);

			return this.readFile(version, componentName);
		});

		return Promise.all(files).then(files => files.join(''));
	}

	getDinamic() {
		if (this.loader) return Promise.resolve(this.loader);

		return new Promise((resolve, reject) => {
			fs.readFile(__dirname + '/dinamic.loader.js',(err, file) => {
				if (err) reject(err);
				this.loader = file.toString().replace('{URL}', process.env.API_URL);
				resolve(this.loader);
			});
		});
	}
}
