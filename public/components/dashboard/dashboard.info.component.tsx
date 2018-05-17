import React from 'react';

const Card = ({icon, children}) => (
  <div className="card">
    <div className="card-body text-center">
      <i className={"card-icon "+icon}></i>
      <p className="card-text text-muted mt-4">{children}</p>
    </div>
  </div>
);

export const InfoCards = () => {
  return (
    <div className="card-deck p-3">
        <Card icon="fas fa-cloud">The help you need to build your website, just the way you need it</Card>
        <Card icon="fas fa-cogs">Web development, modular and faster than ever before</Card>
        <Card icon="fas fa-users">Profesional web components, created and mantained by our community</Card>
    </div>
  );
};