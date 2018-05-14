import React from 'react';
import Dashboard from './dasboard.component';
import { CardDeck } from 'reactstrap';
import { Components } from './componentList.component';
import { InfoCard } from './infoCard.component';
import PyriteHead from './pyriteHead/pyriteHead.component';

export default function (this: Dashboard) {
    return (
        <div>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
            <PyriteHead></PyriteHead>
            <div className="container over-header mt-4">
                <section className="row">
                    <CardDeck className="centered">
                        <InfoCard className="text-primary" icon="fa-blind" text="The help you need to build your website, just the way you need it"></InfoCard>
                        <InfoCard className="text-primary" icon="fa-tachometer-alt" text="Web development, modular and faster than ever before"></InfoCard>
                        <InfoCard className="text-primary" icon="fa-briefcase" text="Profesional web components, created and mantained by our community"></InfoCard>
                    </CardDeck>
                </section>
            </div>
            <hr />
            <div className="container mt-4">
                <h1 className="mb-3 section-title centered"><i className="fas fa-crown"></i>Featured components</h1>
                <Components></Components>
            </div>
        </div>
    );
}