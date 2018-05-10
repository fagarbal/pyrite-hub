import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [MongooseModule.forRoot(process.env.PROD_MONGODB)]
})
export class DatabaseModule {}
