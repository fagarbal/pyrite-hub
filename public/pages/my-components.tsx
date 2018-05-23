import React, { Component } from 'react';
import { Components } from '@components/components/components.component';
import { Header } from '@components/header/header.component';

export default class extends Component<any, any> {
	static getInitialProps({ query }) {
		return query;
	}

	render() {
		return (
			<div>
				<Header user={this.props.user}></Header>
				<Components></Components>
			</div>
		);
	}
}
