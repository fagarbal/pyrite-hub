import { Component } from 'react';
import headerTemplate from './header.template';

interface PyriteHeadProps {
	showModal?: boolean;
}

interface PyriteHeadState {
	showModal?: boolean;
	collapsed?: boolean;
}

export class Header extends Component<PyriteHeadProps, PyriteHeadState> {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			collapsed: true,
		};

		this.toggleModal = this.toggleModal.bind(this);
		this.render = headerTemplate.bind(this);
	}

	toggleModal() {
		this.setState({
			showModal: !this.state.showModal,
		});
	}
}
