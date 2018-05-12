import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class Component {
	@ObjectIdColumn()
	_id: ObjectID;

	@Column()
	tag: string;

	@Column()
	username: string;

	@Column()
	description: string;

	@Column()
	likes: number;

	@Column()
	views: number;
}
