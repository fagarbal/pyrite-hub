import { Component } from 'react';
import headerTemplate from './header.template';

interface PyriteHeadProps {
	modal?: boolean;
}

interface PyriteHeadState {
	modal?: boolean;
	collapsed?: boolean;
}

export class Header extends Component<PyriteHeadProps, PyriteHeadState> {
	constructor(props) {
		super(props);

		this.state = {
			modal: false,
			collapsed: true,
		};

		this.toggleModal = this.toggleModal.bind(this);
		this.render = headerTemplate.bind(this);
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
