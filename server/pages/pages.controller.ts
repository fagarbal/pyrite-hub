import { Get, Controller, Res, Req, Session } from '@nestjs/common';
import { PagesComponent } from './pages.component';

@Controller()
export class PagesController {
	constructor(private readonly pagesComponent: PagesComponent) {}

	@Get('/')
	dashboard(@Req() req, @Res() res, @Session() session) {
		return this.pagesComponent.next.render(req, res, '/dashboard', {
			user: session.passport ? session.passport.user.username : null
		});
	}

	@Get('/component/:name')
	overview(@Req() req, @Res() res, @Session() session) {
		return this.pagesComponent.next.render(req, res, '/overview', {
			name: req.params.name,
			user: session.passport ? session.passport.user.username : null
		});
	}

	@Get('/_next/*')
	next(@Req() req, @Res() res) {
		return this.pagesComponent.handle(req, res);
	}

	@Get('/static/*')
	static(@Req() req, @Res() res) {
		return this.pagesComponent.handle(req, res);
	}
}
