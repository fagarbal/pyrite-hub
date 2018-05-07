import { Get, Controller, Res, Req } from '@nestjs/common';
import { nextApp } from './main';

@Controller()
export class AppController {
	handle: any = nextApp.getRequestHandler();

	@Get('/')
	index(@Req() req, @Res() res) {
		return nextApp.render(req, res, '/', {
			cards: Array(15).fill(0)
		});
	}
	
	@Get('*')
	all(@Req() req, @Res() res) {
		return this.handle(req, res);
	}	
}