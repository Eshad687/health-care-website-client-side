import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    // state for doctors
    const [doctors, setDoctors] = useState();
    // fetching doctors data
    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        // doctors field
        <Container className="my-5">
            <h2 className="text-center">OUR HIGHLY QUALIFIED <span className="border-bottom border-3 border-danger text-danger">DOCTORS</span> </h2>
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