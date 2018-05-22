import { Get, Controller, Res } from '@nestjs/common';

@Controller('auth/github')
export class GithubController {
	@Get('/callback')
	githubCallback(@Res() res) {
		res.redirect('/');
	}
}
