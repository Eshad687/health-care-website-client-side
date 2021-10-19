import React from 'react';

import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Service = ({ service }) => {

    const { name, img, desc, id } = service;

    const history = useHistory();

    const handleDetails = () => {
        history.push(`/service/${id}`)
    }
    return (
        <Col>
            <Card className="rounded-3 shadow">
                <Card.Img variant="top" height="200px" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {desc.slice(0, 50) + " ..."}
                    </Card.Text>

                    <Button onClick={handleDetails} variant="outline-primary">See More</Button>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;