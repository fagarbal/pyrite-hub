import React from 'react';
import { translation } from '@utils/i18n';

const Card = ({ icon, children }) => (
	<div className="card">
		<div className="card-body text-center">
			<i className={"card-icon " + icon}></i>
			<p className="card-text text-muted mt-4">{children}</p>
		</div>
	</div>
);

export const InfoCards = () => {
	return (
		<div className="card-deck p-3">
			<Card icon="fas fa-cloud">{translation('dashboard.infoLeft')}</Card>
			<Card icon="fas fa-cogs">{translation('dashboard.infoCenter')}</Card>
			<Card icon="fas fa-users">{translation('dashboard.infoRight')}</Card>
		</div>
	);
};