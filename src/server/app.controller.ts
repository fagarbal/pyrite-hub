import { Get, Controller, Param, Res, Req } from '@nestjs/common';
import { nextApp } from './main';
@Controller()
export class AppController {
	@Get()
	root(@Req() req, @Res() res) {
		return nextApp.render(req, res, '/', {
			cards:  Array(15).fill(0)
		});
	}	
}