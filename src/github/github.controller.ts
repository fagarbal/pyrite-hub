import { Get, Controller, Param, Res, Req, Next, Middleware } from '@nestjs/common';
import { GithubService } from './github.component';

@Controller("github")
export class GithubController {
	constructor(private readonly githubService: GithubService) { }

	@Get("/callback")
	async githubCallback(@Req() req, @Res() res, @Next() next) {
		res.redirect('/');
	}
}
