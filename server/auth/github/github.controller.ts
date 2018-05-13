import { Get, Controller, Res } from '@nestjs/common';

@Controller('auth/github')
export class GithubController {
	@Get('/')
	github() {}

	@Get('/callback')
	githubCallback(@Res() res) {
		res.redirect('/?logged=true');
	}
}
