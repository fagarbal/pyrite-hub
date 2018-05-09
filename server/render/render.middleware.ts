import { Injectable, NestMiddleware } from '@nestjs/common';
import { RenderService } from './render.component';

@Injectable()
export class RenderMiddleware implements NestMiddleware {
	constructor(private readonly renderService: RenderService) { }

	resolve() {
		return (req, res) => {
			console.log(req.originalUrl)
			return this.renderService.handle(req, res, req.originalUrl);
		};
	}
}
