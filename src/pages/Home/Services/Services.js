import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';


const Services = () => {
    // fetching data from cutom hook
    const services = useServices();
    return (
        // services section
        <div id="services" className="mx-5 my-5 pt-5  ">
            <h2 className="text-center"> <span className="border-bottom border-3 border-primary text-primary">SERVICES</span>  WE ARE FAMOUS FOR </h2>
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