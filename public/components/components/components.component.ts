import { Component } from 'react';
import componentsTemplate from './components.template';

interface ComponentsProps {
	name?: string;
}

interface ComponentsState {}

export class Components extends Component<ComponentsProps, ComponentsState> {
	content: string;

	constructor(props) {
		super(props);
		this.render = componentsTemplate.bind(this);
	}
}
