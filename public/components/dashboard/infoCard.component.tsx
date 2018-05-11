import React from 'react';
import { Card, CardTitle, CardBody, CardText, CardImg } from 'reactstrap';

export const InfoCard = (props) => {
  return (
    <div className="col-md-4 col-sm-1">
      <Card inverse>
        <CardBody>
          <CardTitle></CardTitle>
          <CardText className="info-card-icon"><i className="fas fa-tachometer-alt"></i></CardText>
          <CardText>
            <small className="text-muted">Web development, fastest than ever.</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};