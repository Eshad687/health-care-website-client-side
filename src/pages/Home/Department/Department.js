import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Department = ({ department }) => {
    const { name, img, desc } = department;
    return (
        <div>
            <Col>
                <Card className="rounded-3 shadow text-white bg-info p-2">
                    <Row>
                        <Col sm={6}>
                            <Card.Img height="250px" src={img} />
                        </Col>
                        <Col sm={6}>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {desc.slice(0, 65)}
                                </Card.Text>



                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </div>
    );
};

export default Department;