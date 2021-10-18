import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';


const Services = () => {
    const services = useServices();
    return (
        <div id="services" className="mx-5 my-5 ">
            <h2>Services We Are Known For</h2>
            <Row xs={1} md={4} className="g-4 mt-2">
                {services?.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)}
            </Row>
        </div >
    );
};

export default Services;