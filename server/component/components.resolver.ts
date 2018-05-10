import { Query, Resolver } from '@nestjs/graphql';

const components = [{
	id: 1,
	tag: 'pyrite-table',
	username: 'fagarbal',
	description: 'Component for create tables',
	likes: 10,
	views: 20
},{
	id: 2,
	tag: 'pyrite-form',
	username: 'fagarbal',
	description: 'Component for create forms',
	likes: 54,
	views: 55
},{
	id: 3,
	tag: 'pyrite-modal',
	username: 'fagarbal',
	description: 'Component for create modals',
	likes: 4,
	views: 76
},{
	id: 4,
	tag: 'pyrite-maps',
	username: 'fagarbal',
	description: 'Component for google maps',
	likes: 36,
	views: 2
},{
	id: 5,
	tag: 'pyrite-bootstrap',
	username: 'fagarbal',
	description: 'Component for bootstrap',
	likes: 41,
	views: 67
},{
	id: 6,
	tag: 'pyrite-editor',
	username: 'fagarbal',
	description: 'Component for editor',
	likes: 115,
	views: 332
}];

@Resolver('Component')
export class ComponentResolver {
	@Query()
	getAll() {
		return components;
	}
}