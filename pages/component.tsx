import React, { Component } from 'react';

export default class extends Component<any> {
	static async getInitialProps({ query: { name } }) {
		return { name: name }
	}
	render() {
		return (
			<div>
                <h1>{this.props.name}</h1>
			</div>
		)
	}
}
