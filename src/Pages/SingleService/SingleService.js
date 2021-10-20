import React from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useService from '../../hooks/useServices';
const SingleService = () => {
    const {services} = useService();
    const { serviceId } = useParams();
    const service = services.find( x => x.id.toString() === serviceId );
    const {name,description,question,img} = service
    return (
       <Row id="single" className="p-5">
           <Col lg={4} md={4} sm={6} xs={8} className="m-auto">
            <Card>
        <Card.Img className="img-fluid" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{question}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{name}</ListGroupItem>
        </ListGroup>
        <Card.Body>
        <Link to={'/home/#service'}>
                <button className="btn btn-secondary">Back to Services</button>
            </Link>
        </Card.Body>
      </Card>
      </Col>
       </Row>
    );
};

export default SingleService;