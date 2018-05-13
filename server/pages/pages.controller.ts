import { Get, Controller, Res, Req } from '@nestjs/common';
import { PagesComponent } from './pages.component';

@Controller()
export class PagesController {
	constructor(private readonly pagesComponent: PagesComponent) {}

	@Get('/')
	index(@Req() req, @Res() res) {
		return this.pagesComponent.next.render(req, res, '/dashboard');
	}

	@Get('/component/:name')
	component(@Req() req, @Res() res) {
		return this.pagesComponent.next.render(req, res, '/component', {
			name: req.params.name,
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
