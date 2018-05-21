import { withAuth } from '@queries/auth.query';
import { Component } from 'react';
import headerSigninTemplate from './header.signin.template';

interface SignInModalProps {
	toggle?: () => {};
	show?: boolean;
	signin?: (variables: any) => Promise<boolean>;
	logout?: () => Promise<boolean>;
}

interface SignInModalState {
	username?: string;
    password?: string;
    error?: boolean;
}

export class SignIn extends Component<SignInModalProps, SignInModalState> {
	constructor(props) {
		super(props);

        this.state = {
            error: false
        };

        this.render = headerSigninTemplate.bind(this);
        this.signin = this.signin.bind(this);
        this.logout = this.logout.bind(this);
        this.removeError = this.removeError.bind(this);
    }
    
    removeError() {
        this.setState({ error: false });
    }

	signin(event) {
        event.preventDefault();

		this.props
			.signin({
				variables: {
					username: this.state.username,
					password: this.state.password,
				},
			})
			.then(result => {
				if (result) location.reload();
            })
            .catch(() => {
                this.setState({
                    error: true
                });
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

export const SignInModal = withAuth(SignIn);
