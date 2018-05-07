import { Get, Controller, Param, Res, Req, Next, Middleware } from '@nestjs/common';

@Controller('auth/gitlab')
export class GitlabController {
	@Get('/callback')
	async gitlabCallback(@Req() req, @Res() res, @Next() next) {
		res.render('close-popup', {
			origin: 'gitlab'
		});
	}
}
