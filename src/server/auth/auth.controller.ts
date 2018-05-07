import { Get, Controller, Param, Res, Req, Next, Middleware, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
	@Get('/login')
	async login(@Body('username') username, @Body('password') password) {

	}
}
