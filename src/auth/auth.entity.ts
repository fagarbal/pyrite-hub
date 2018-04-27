import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	username: string;

	@OneToMany(type => Social, social => social)
	socialAccounts: Social[];
	
	@OneToMany(type => Component, component => component.user)
    components: Component[];
}

type SocialNames = "github" | "gitlab" | "bitbucket";

@Entity()
export class Social {
	@PrimaryGeneratedColumn()
	id: number;
	
	@Column({
		type: "enum",
		enum: [
			"github",
			"gitlab",
			"bitbucket"
		]
	})
	name: SocialNames;

	@Column()
	social_id: string;

	@Column()
    social_token: string;
}

@Entity()
export class Component {
	@PrimaryGeneratedColumn()
	id: number;
	
	@Column()
	name: string;

	@Column()
	version: string;

	@ManyToOne(type => User, user => user.components)
    user: User;
}