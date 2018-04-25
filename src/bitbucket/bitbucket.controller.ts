import { Get, Controller, Param, Res, Req, Next, Middleware } from '@nestjs/common';

@Controller("bitbucket")
export class BitbucketController {
	@Get("/callback")
	async bitbucketCallback(@Req() req, @Res() res, @Next() next) {
		res.redirect('/');
	}
}
