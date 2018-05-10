import { Injectable } from '@nestjs/common';
/* import { InjectModel } from '@nestjs/mongoose';
import { Component } from './components.schema';
import { ModelType } from 'typegoose';
 */
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

@Injectable()
export class ComponentService {
    //constructor(@InjectModel(Component) private readonly componentModel: ModelType<Component>) {}

    findAll() {
        return components;
    }
}