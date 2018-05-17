import React from 'react';

import { Dashboard } from './dasboard.component';
import { Components } from './dashboard.list.component';
import { InfoCards } from './dashboard.info.component';

export default function (this: Dashboard) {
    return (
        <div className="dashboard">
            <div className="background-image">
                <div className="title text-white text-center">
                    <h1>Pyrite Hub</h1>
                    <h2>Web components, the easy way</h2>
                </div>
                <p className="text-center down-mark text-secondary">
                    <i className="down-mark fas fa-angle-double-down"></i>
                </p>
            </div>
            <div className="container container-info">
                <section className="row">
                    <InfoCards></InfoCards>
                </section>
            </div>
            <div className="container container-components">
                <h1 className="mb-5 text-center text-muted">Featured components</h1>
                <Components></Components>
            </div>
        </div>
    );
}