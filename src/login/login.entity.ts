import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	username: string;

	@Column()
	password: string;

	@OneToMany(type => Component, component => component.user)
    components: Component[];
}

@Entity()
export class Component {
	@PrimaryGeneratedColumn()
    id: number;

	@Column()
	name: string;

	@ManyToOne(type => User, user => user.components)
    user: User;
}