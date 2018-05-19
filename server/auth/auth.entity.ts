import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class Social {
	@ObjectIdColumn() _id: ObjectID;

	@Column() githubId: string;
	@Column() githubToken: string;

	@Column() gitlabId: string;
	@Column() gitlabToken: string;

	@Column() bitbucketId: string;
	@Column() bitbucketToken: string;
}

@Entity()
export class User {
	@ObjectIdColumn() _id: ObjectID;

	@Column() username: string;

	@Column() password: string;

	@Column() social: Social;
}
