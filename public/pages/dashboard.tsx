import React, { Component } from 'react';

import { Dashboard } from '@components/dashboard/dasboard.component';
import { Header } from '@components/header/header.component';

export default class extends Component<any, any> {
    render() {
       return (
            <div>
                <Header></Header>
                <Dashboard></Dashboard>
            </div>
       );
    }
}
