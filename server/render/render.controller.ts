import { Get, Controller, Res, Req } from '@nestjs/common';
import { RenderService } from './render.component';

@Controller()
export class RenderController {
	constructor(private readonly renderService: RenderService) { }

	@Get('/')
	index(@Req() req, @Res() res) {
		return this.renderService.next.render(req, res, '/', {
			cards: Array(15).fill(0)
		});
	}

	@Get('/component/:name')
	component(@Req() req, @Res() res) {
		return this.renderService.next.render(req, res, '/component', {
			name: req.params.name
		});
	}
}