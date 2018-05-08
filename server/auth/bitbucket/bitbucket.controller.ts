import { Get, Controller, Res } from '@nestjs/common';
import closeScript from '../close-script';

@Controller('auth/bitbucket')
export class BitbucketController {
	@Get('/callback')
	async bitbucketCallback(@Res() res) {
		res.send(closeScript('bitbucket'));
	}
}
