import React, { Component } from 'react';

import { Dashboard } from '@components/dashboard/dasboard.component';
import { Header } from '@components/header/header.component';

export default class extends Component<any, any> {
    static getInitialProps ({ query }) {
        console.log(query)
		return query;
    }

    render() {
       return (
            <div>
                <Header user={this.props.user}></Header>
                <Dashboard></Dashboard>
            </div>
       );
    }
}
