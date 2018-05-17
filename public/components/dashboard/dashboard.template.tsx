import React from 'react';
import { Dashboard } from './dasboard.component';
import { CardDeck } from 'reactstrap';
import { Components } from './dashboard.list.component';
import { InfoCard } from './dashboard.card.component';

export default function (this: Dashboard) {
    return (
        <div className="dashboard">
            <div className="background-image">
                <div className="title text-white text-center">
                    <h1 className="mb-3">Pyrite Hub</h1>
                    <h4 className="mb-3">Web components, the easy way</h4>
                </div>
                <p className="text-center down-mark text-secondary">
                    <i className="fas fa-angle-double-down"></i>
                </p>
            </div>
            <div className="container container-info">
                <section className="row">
                    <CardDeck className="centered">
                        <InfoCard icon="fa-blind" text="The help you need to build your website, just the way you need it"></InfoCard>
                        <InfoCard icon="fa-tachometer-alt" text="Web development, modular and faster than ever before"></InfoCard>
                        <InfoCard icon="fa-briefcase" text="Profesional web components, created and mantained by our community"></InfoCard>
                    </CardDeck>
                </section>
            </div>
            <div className="container container-components">
                <h1 className="mb-5 text-center"><i className="fas fa-crown"></i>Featured components</h1>
                <Components></Components>
            </div>
        </div>
    );
}