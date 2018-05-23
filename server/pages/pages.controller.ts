import { Get, Controller, Res, Req } from '@nestjs/common';
import { PagesComponent } from './pages.component';

@Controller()
export class PagesController {
	constructor(private readonly pagesComponent: PagesComponent) {}

	@Get('/')
	dashboard(@Req() req, @Res() res) {
		return this.pagesComponent.next.render(req, res, '/dashboard');
	}

	@Get('/component/:name')
	overview(@Req() req, @Res() res) {
		return this.pagesComponent.next.render(req, res, '/overview', {
			name: req.params.name
		});
	}

	@Get('/my-components')
	components(@Req() req, @Res() res) {
		return this.pagesComponent.next.render(req, res, '/my-components');
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
