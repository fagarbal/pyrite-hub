import React, { Component } from 'react';
import { Overview } from '../components/overview/overview.component';

export default class extends Component<any, any> {
	static async getInitialProps({ query: { name } }) {
		return { name: name }
    }

    render() {
       return <Overview name={this.props.name}></Overview>
    }
}
