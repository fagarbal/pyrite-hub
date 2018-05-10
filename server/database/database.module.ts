import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	exports: [MongooseModule.forRoot("mongodb://heroku_4kbs1gn2:2kmu5g4lm5vtfoni4q6d05uun5@ds019638.mlab.com:19638/heroku_4kbs1gn2")]
})
export class DatabaseModule {}
