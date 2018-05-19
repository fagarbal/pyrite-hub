import { withAuth } from '@queries/auth.query';
import { Component } from 'react';
import headerSigninTemplate from './header.signin.template';

interface SignInModalProps {
    toggle?: () => {};
    show?: boolean;
    signin?: (variables: any) => {};
}

interface SignInModalState {
    username: string,
    password: string
}

export class SignIn extends Component<SignInModalProps, SignInModalState> {
    constructor(props) {
        super(props);

        this.render = headerSigninTemplate.bind(this);
        this.signin = this.signin.bind(this);
    }

    signin(event) {
        event.preventDefault();

        this.props.signin({
            variables: {
                username: this.state.username,
                password: this.state.password
            }
        });
    }
}

export const SignInModal = withAuth(SignIn);
