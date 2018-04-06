import { Get, Controller, Param, Res } from '@nestjs/common';
import { ComponentsService } from './components.component';

@Controller("components")
export class ComponentsController {
	constructor(private readonly componentsService: ComponentsService) { }

	@Get(":components")
	async getComponents(@Res() res, @Param("components") componentsParam: string) {
		res.header("Content-Type", "application/javascript");

		const components = await this.componentsService.getComponents(componentsParam);

		res.send(components);
	}
}
