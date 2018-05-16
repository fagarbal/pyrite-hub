import { Get, Controller, Param, Res } from '@nestjs/common';
import { FileComponentService } from './file.component.service';

@Controller('components')
export class FileComponentController {
	constructor(private readonly fileComponentService: FileComponentService) {}

	@Get('/')
	async getDinamicComponents(
		@Res() res
	) {
		res.header('Content-Type', 'application/javascript');

		const loader = await this.fileComponentService.getDinamic();

		res.send(loader);
	}

	@Get(':components')
	async getComponents(
		@Res() res,
		@Param('components') componentsParam: string,
	) {
		res.header('Content-Type', 'application/javascript');

		const components = await this.fileComponentService.getComponents(
			componentsParam,
		);

		res.send(components);
	}
}
