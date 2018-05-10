import { Get, Controller, Param, Res } from '@nestjs/common';
import { ComponentsFile } from './components.component';

@Controller('components')
export class ComponentsController {
	constructor(private readonly componentsFile: ComponentsFile) { }

	@Get(':components')
	async getComponents(@Res() res, @Param('components') componentsParam: string) {
		res.header('Content-Type', 'application/javascript');

		const components = await this.componentsFile.getComponents(componentsParam);

		res.send(components);
	}
}
