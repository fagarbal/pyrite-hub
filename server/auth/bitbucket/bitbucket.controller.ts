import { Get, Controller, Res } from '@nestjs/common';
import closeScript from '../close-script';

@Controller('auth/bitbucket')
export class BitbucketController {
	@Get('/callback')
	async bitbucketCallback(@Res() res) {
		const response = closeScript('bitbucket');
		res.set('Content-Type', 'text/html');
		res.send(new Buffer(response));
	}
}
