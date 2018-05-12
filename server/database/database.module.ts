import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mongodb',
			host: process.env.MONGODB_HOST,
			port: parseInt(process.env.MONGODB_PORT),
			username: process.env.MONGODB_USER,
			password: process.env.MONGODB_PASSWORD,
			database: process.env.MONGODB_DB,
			entities: [__dirname + '/../**/*.entity{.ts,.js}'],
			synchronize: true
		})
	]
})
export class DatabaseModule {}
