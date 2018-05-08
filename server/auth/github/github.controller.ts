import { Get, Controller, Res } from '@nestjs/common';
import closeScript from '../close-script';

@Controller('auth/github')
export class GithubController {
	@Get('/callback')
	async githubCallback(@Res() res) {
		const response = closeScript('github');
		res.set('Content-Type', 'text/html');
		res.send(new Buffer(response));
	}
}
