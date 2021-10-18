import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Service = ({ service }) => {

    const { name, img, desc, id } = service;
    const element = <FontAwesomeIcon icon={faCoffee} />
    const history = useHistory();

    const handleDetails = () => {
        history.push(`/service/${id}`)
    }
    return (
        <Col>
            <Card className="rounded-3 shadow">
                <Card.Img variant="top" src={img} />
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