import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, Col } from 'react-bootstrap';

const Service = ({ service }) => {

    const { name, img, desc } = service;
    const element = <FontAwesomeIcon icon={faCoffee} />
    return (
        <Col>
            <Card className="rounded-3 shadow">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {desc.slice(0, 50) + " ..."}
                    </Card.Text>

                    <Button variant="outline-primary">See More</Button>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;