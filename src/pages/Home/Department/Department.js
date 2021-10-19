import React from 'react';
import { Card, Col, } from 'react-bootstrap';
import './Department.css'

const Department = ({ department }) => {

    const { name, img, desc } = department;
    return (
        <div>
            {/* Depatment Card */}
            <Col>
                <Card className="rounded-3 border-0  card">


                    <Card.Img className="" height="250px" src={img} />


                    <Card.Body className="px-0">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="text-muted">
                            {desc.slice(0, 150) + ' ...'}
                        </Card.Text>



                    </Card.Body>

                </Card>
            </Col>
        </div>
    );
};

export default Department;