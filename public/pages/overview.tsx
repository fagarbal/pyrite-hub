import React, { Component } from 'react';
import { Overview } from '@components/overview/overview.component';
import { Header } from '@components/header/header.component';

export default class extends Component<any, any> {
	static getInitialProps({ query }) {
		return query;
	}

	render() {
		return (
			<div>
				<link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css"/>
				<Header user={this.props.user}></Header>
				<Overview name={this.props.name}></Overview>
			</div>
		);
	}
}
