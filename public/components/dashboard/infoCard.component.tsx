import React from 'react';
import { Card, CardTitle, CardBody, CardText} from 'reactstrap';

export const InfoCard = (props) => {
  return (
    <div className="col-md-4 col-sm-1">
      <Card inverse>
        <CardBody>
          <CardTitle></CardTitle>
          <CardText className="info-card-icon"><i className={`fas ${props.icon}`}></i></CardText>
          <CardText>
            <small className="text-muted">{props.text}</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};