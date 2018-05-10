import { Get, Controller, Res } from '@nestjs/common';

@Controller('auth/github')
export class GithubController {
	@Get('/callback')
	async githubCallback(@Res() res) {
		res.redirect('/?logged=true');
	}
}
