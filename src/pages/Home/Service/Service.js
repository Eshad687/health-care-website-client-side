import React from 'react';

import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import './Service.css'
const Service = ({ service }) => {

    const { name, img, desc, id } = service;

    const history = useHistory();
    // dynamic routing
    const handleDetails = () => {
        history.push(`/service/${id}`)
    }
    return (
        <Col>
            {/* service card */}
            <Card className="card rounded-3 shadow border-0">
                <Card.Img className="card-img" variant="top" height="200px" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="text-muted">
                        {desc.slice(0, 50) + " ..."}
                    </Card.Text>

                    <Button className="btn" onClick={handleDetails} variant="outline-primary">See More <FontAwesomeIcon icon={faArrowAltCircleRight} /></Button>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;