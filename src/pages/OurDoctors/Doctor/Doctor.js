import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Doctor.css'

const Doctor = ({ doctor }) => {
    const { name, img, degree, dep } = doctor
    return (

        <Col>
            <Card className="card rounded-3 shadow text-center border-0">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <hr />
                        {degree}
                        <hr />
                        {dep}

                    </Card.Text>



                </Card.Body>
            </Card>
        </Col>

    );
};

export default Doctor;