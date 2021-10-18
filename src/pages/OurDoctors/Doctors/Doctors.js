import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {

    const [doctors, setDoctors] = useState();
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <Container className="my-5">
            <h3>Our Doctors</h3>
            <Row xs={1} md={3} className="g-4 mt-2">
                {doctors?.map(doctor => <Doctor
                    key={doctor.id}
                    doctor={doctor}

                ></Doctor>)}
            </Row>
        </Container>
    );
};

export default Doctors;