import { Component } from 'react';
import headerTemplate from './header.template';
import { withAuth } from '@queries/auth.query';

interface PyriteHeadProps {
	showModal?: boolean;
	user: any;
	signin?: (variables: any) => Promise<boolean>;
	logout?: () => Promise<boolean>;
}

interface PyriteHeadState {
	showModal?: boolean;
	collapsed?: boolean;
}

export class HeaderComponent extends Component<PyriteHeadProps, PyriteHeadState> {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			collapsed: true,
		};

		this.toggleModal = this.toggleModal.bind(this);
		this.logout = this.logout.bind(this);
		this.render = headerTemplate.bind(this);
	}

	toggleModal() {
		this.setState({
			showModal: !this.state.showModal,
		});
	}

    logout() {
        this.props
			.logout()
			.then(() => {
				location.reload();
            });
    }
}

export const Header = withAuth(HeaderComponent);