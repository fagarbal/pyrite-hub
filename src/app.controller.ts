import { Get, Controller, Param, Res } from '@nestjs/common';

@Controller()
export class AppController {
	@Get()
	root(@Res() res) {
		res.render('main', {
			cards: Array(15).fill(0)
		});
	}
}
