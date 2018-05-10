import { Get, Controller, Res, Req } from '@nestjs/common';
import { RenderService } from './render.component';

@Controller()
export class RenderController {
	constructor(private readonly renderService: RenderService) { }
	@Get('/.well-known/acme-challenge/EI_6nS65-3ooej0Fohrhdn6n7jXsu-P6LivRsYWKcz0')
	cert(@Res() res) {
		res.send('EI_6nS65-3ooej0Fohrhdn6n7jXsu-P6LivRsYWKcz0.ANQNq26JYdjS2-yT_KGykpfqvuPJw2WM6ZTJUrPBTTA')
	}

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