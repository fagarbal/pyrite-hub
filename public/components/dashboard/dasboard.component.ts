import { Component } from 'react';
import dashboardTemplate from './dashboard.template';

export interface IndexProps {
	cards?: Array<any>;
	modal?: boolean;
}

export interface IndexState {
	modal?: boolean;
	collapsed?: boolean;
}

export class Dashboard extends Component<IndexProps, IndexState> {
	constructor(props) {
		super(props);

		this.state = {
			modal: false,
			collapsed: true,
		};

		this.toggleModal = this.toggleModal.bind(this);
		this.render = dashboardTemplate.bind(this);
	}

	componentDidMount() {
		this.setState({
			modal: this.props.modal || false,
		});
	}

	toggleModal() {
		this.setState({
			modal: !this.state.modal,
		});
	}
}
