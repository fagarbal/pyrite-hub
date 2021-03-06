import { Get, Controller, Res } from '@nestjs/common';

@Controller('auth/gitlab')
export class GitlabController {
	@Get('/callback')
	async bitbucketCallback(@Res() res) {
		res.redirect('/?logged=true');
	}
}
