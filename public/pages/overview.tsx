import React, { Component } from 'react';
import { Overview } from '@components/overview/overview.component';
import { Header } from '@components/header/header.component';

export default class extends Component<any, any> {
	static async getInitialProps({ query: { name } }) {
		return { name: name }
	}

	render() {
		return (
			<div>
				<Header></Header>
				<Overview name={this.props.name}></Overview>
			</div>
		);
	}
}
