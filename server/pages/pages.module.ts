import { PagesController } from './pages.controller';
import { PagesComponent } from './pages.component';
import { Module } from '@nestjs/common';

@Module({
	controllers: [PagesController],
	providers: [PagesComponent],
})
export class PagesModule {}
