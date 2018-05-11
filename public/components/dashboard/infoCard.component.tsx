import React from 'react';
import { Card, CardTitle, CardBody, CardText, CardImg } from 'reactstrap';

export const InfoCard = (props) => {
  return (
    <div className="col-md-4 col-sm-1">
      <Card inverse>
        <CardImg top width="100%" src="https://www.whitecase.com/sites/whitecase/files/images/locations/Berlin_Tablet_1920x960.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardText>Aquí ponemos cosas que estén chachis sobre PyriteHub, por qué molamos tanto y eso </CardText>
          <CardText>
            <small className="text-muted">Y aqui no se, algo mas</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};