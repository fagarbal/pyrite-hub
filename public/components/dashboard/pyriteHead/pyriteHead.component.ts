import { Component } from 'react';
import pyriteHeadTemplate from './pyriteHead.template';

interface PyriteHeadProps {
	modal?: boolean;
}

interface PyriteHeadState {
	modal?: boolean;
	collapsed?: boolean;
}

class pyriteHead extends Component<PyriteHeadProps, PyriteHeadState> {
	constructor(props) {
		super(props);

		this.state = {
			modal: false,
			collapsed: true,
		};

		this.toggleModal = this.toggleModal.bind(this);
		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.render = pyriteHeadTemplate.bind(this);
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

	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}
}

export default pyriteHead;
