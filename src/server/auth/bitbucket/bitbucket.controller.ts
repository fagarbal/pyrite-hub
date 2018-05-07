import { Get, Controller, Param, Res, Req, Next, Middleware } from '@nestjs/common';

@Controller('auth/bitbucket')
export class BitbucketController {
	@Get('/callback')
	async bitbucketCallback(@Req() req, @Res() res, @Next() next) {
		res.render('close-popup', {
			origin: 'bitbucket'
		});
	}
}
