import { Get, Controller, Res } from '@nestjs/common';
import closeScript from '../close-script';

@Controller('auth/gitlab')
export class GitlabController {
	@Get('/callback')
	async bitbucketCallback(@Res() res) {
		const response = closeScript('gitlab');
		res.set('Content-Type', 'text/html');
		res.send(new Buffer(response));
	}
}
