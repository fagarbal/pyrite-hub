import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	username: string;

	@Column()
	password: string;

	@OneToMany(type => UserSocial, social => social)
	socialAccounts: UserSocial[];

	@OneToMany(type => Component, component => component.user)
	components: Component[];

	@CreateDateColumn()
	createdOn: Date;

	@UpdateDateColumn()
	updatedOn: Date;
}

type SocialNames = 'github' | 'gitlab' | 'bitbucket';

@Entity()
export class UserSocial {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: 'enum',
		enum: [
			'github',
			'gitlab',
			'bitbucket'
		]
	})
	name: SocialNames;

	@Column()
	socialId: string;

	@Column()
	socialToken: string;

	@CreateDateColumn()
	createdOn: Date;

	@UpdateDateColumn()
	updatedOn: Date;
}

@Entity()
export class Component {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	version: string;

	@Column('text')
	readme: string;

	@Column()
	repo: string;

	@ManyToOne(type => User, user => user.components)
	user: User;

	@CreateDateColumn()
	createdOn: Date;

	@UpdateDateColumn()
	updatedOn: Date;
}
