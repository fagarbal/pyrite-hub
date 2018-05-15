import { Component } from 'react';
import overviewTemplate from './overview.template';

interface OverviewProps {
	name?: string;
}

interface OverviewState {}

export class Overview extends Component<OverviewProps, OverviewState> {
	constructor(props) {
		super(props);
		this.render = overviewTemplate.bind(this);
	}
}
