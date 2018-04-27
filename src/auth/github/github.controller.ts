import { Get, Controller, Param, Res, Req, Next, Middleware } from '@nestjs/common';

@Controller("auth/github")
export class GithubController {
	@Get("/callback")
	async githubCallback(@Req() req, @Res() res, @Next() next) {
		res.redirect('/close?auth=github');

	}
}
