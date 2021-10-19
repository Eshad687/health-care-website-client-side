import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';

const ServiceDetails = () => {
    // getting data using dynamic route
    const { serviceId } = useParams();
    const services = useServices();

    const service = services?.find(srvc => srvc.id === +serviceId);


    return (
        // service details page
        <Container className="my-5">
            {
                <Row xs={1} md={2} className="g-4">
                    <Col >
                        <img className="rounded" width="350" src={service?.img} alt="" />
                    </Col>
                    <Col>
                        <h3>{service?.name}</h3>
                        <p className="text-muted">{service?.desc}</p>
                    </Col>
                </Row>
            }

        </Container>
    );
};

export default ServiceDetails;