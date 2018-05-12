import { Module } from '@nestjs/common';

import { FileComponentController } from './file.component.controller';
import { FileComponentService} from './file.component.service';

@Module({
	controllers: [FileComponentController],
	providers: [FileComponentService]
})
export class FileComponentModule {}
