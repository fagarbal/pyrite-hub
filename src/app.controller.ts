import { Get, Controller, Param, Res } from '@nestjs/common';
import * as path from "path";

@Controller()
export class AppController {
	@Get()
	root(@Res() res) {
		res.sendFile(path.resolve("./public/index.html"));
	}
}
