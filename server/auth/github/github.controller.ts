import { Get, Controller, Res } from '@nestjs/common';
import closeScript from '../close-script';

@Controller('auth/github')
export class GithubController {
	@Get('/callback')
	async githubCallback(@Res() res) {
		const response = closeScript('github');
		console.log("sddasdsadsadsadsadas")
		console.log(response);
		return res.send(response);
	}
}
