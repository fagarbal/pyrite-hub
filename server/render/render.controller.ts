import { Get, Controller, Res, Req } from '@nestjs/common';
import { RenderService } from './render.component';

@Controller()
export class RenderController {
	constructor(private readonly renderService: RenderService) { }

	@Get('/')
	index(@Req() req, @Res() res) {
		return this.renderService.next.render(req, res, '/', {
			cards: Array(6).fill(0)
		});
	}

	@Get('/component/:name')
	component(@Req() req, @Res() res) {
		return this.renderService.next.render(req, res, '/component', {
			name: req.params.name
		});
	}
	
	@Get('/_next/*') next(@Req() req, @Res() res) {
		return this.renderService.handle(req, res);
	}

	@Get('/static/*') static(@Req() req, @Res() res) {
		return this.renderService.handle(req, res);
	}
}