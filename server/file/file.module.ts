import { Module } from '@nestjs/common';
import { FileComponentModule } from './component/file.component.module';

@Module({
	imports: [FileComponentModule],
})
export class FileModule {}
