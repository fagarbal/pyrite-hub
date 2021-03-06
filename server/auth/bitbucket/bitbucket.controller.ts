import { Get, Controller, Res } from '@nestjs/common';

@Controller('auth/bitbucket')
export class BitbucketController {
	@Get('/callback')
	async bitbucketCallback(@Res() res) {
		res.redirect('/?logged=true');
	}
}
