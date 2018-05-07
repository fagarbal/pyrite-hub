import { Get, Controller, Res } from '@nestjs/common';

@Controller('auth/github')
export class GithubController {
	@Get('/callback')
	async bitbucketCallback(@Res() res) {
		res.render('close-popup', {
			origin: 'github'
		});
	}
}
