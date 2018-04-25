import { Module } from '@nestjs/common';
import { DatabaseModule } from "../database/database.module";
import { userProviders, componentProviders } from "./login.providers";

@Module({
	imports: [DatabaseModule],
	components: [...userProviders, ...componentProviders],
})
export class LoginModule { }
