import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const services = useServices();
    console.log(services)
    const service = services?.find(srvc => srvc.id === +serviceId);
    console.log(serviceId)
    console.log(service)

    return (
        <Container className="my-5">
            {
                <Row xs={1} md={2} className="g-4">
                    <Col >
                        <img className="rounded" width="450" src={service?.img} alt="" />
                    </Col>
                    <Col>
                        <h3>{service?.name}</h3>
                        <p>{service?.desc}</p>
                    </Col>
                </Row>
            }

        </Container>
    );
};

export default ServiceDetails;