import { Get, Controller, Res } from '@nestjs/common';
import closeScript from '../close-script';

@Controller('auth/github')
export class GithubController {
	@Get('/callback')
	async bitbucketCallback(@Res() res) {
		res.send(closeScript('github'));
	}
}
