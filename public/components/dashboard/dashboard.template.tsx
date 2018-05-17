import React from 'react';

import { Dashboard } from './dasboard.component';
import { Components } from './dashboard.list.component';
import { InfoCards } from './dashboard.info.component';

import { translation } from '@utils/i18n';

export default function (this: Dashboard) {
    return (
        <div className="dashboard">
            <div className="background-image">
                <div className="title text-white text-center">
                    <h1>{translation('dashboard.title')}</h1>
                    <h2>{translation('dashboard.subtitle')}</h2>
                </div>
                <div className="text-center down-mark">
                    <p className="text-secondary">{translation('dashboard.scrollDown')}</p>
                    <i className="scroll-down text-secondary fas fa-angle-double-down"></i>
                </div>
            </div>
            <div className="container container-info">
                <section className="row">
                    <InfoCards></InfoCards>
                </section>
            </div>
            <div className="container container-components">
                <h1 className="mb-5 text-center text-muted">{translation('dashboard.featured')}</h1>
                <Components></Components>
            </div>
        </div>
    );
}