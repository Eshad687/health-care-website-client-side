import React from 'react';
import { Col, Form, Row, Container, FloatingLabel } from 'react-bootstrap';
import './GetAppointment.css'

const GetAppointment = () => {
    return (
        <div className="appointment">
            <Container>
                <Row>

                    <Col xs={12} md={6}>
                        <Col xs={12}>
                            <h2 className="text-center pt-5">BOOK AN <span className="border-bottom border-3 border-success text-success">APPOINTMENT</span> </h2>
                        </Col>
                        <Form className=" py-5 ">
                            <Row className="mb-3">
                                <Form.Group as={Col} className >
                                    <FloatingLabel controlId="floatingSelectGrid" label="Departments">
                                        <Form.Select >
                                            <option>Select</option>
                                            <option value="1">Oncology</option>
                                            <option value="2">Cardiology</option>
                                            <option value="3">Radiology</option>
                                            <option value="4">Neurology</option>
                                            <option value="5">Medicine</option>

                                        </Form.Select>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Name"

                                    >
                                        <Form.Control type="text" />
                                    </FloatingLabel>
                                </Form.Group>


                            </Row>
                            <Row className="mb-3">

                                <Form.Group as={Col} >
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Date of Birth"

                                    >
                                        <Form.Control type="date" />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Phone"

                                    >
                                        <Form.Control type="text" />
                                    </FloatingLabel>
                                </Form.Group>


                            </Row>



                            <Row className="mb-3">
                                <FloatingLabel controlId="floatingTextarea2" label="Your Message">
                                    <Form.Control
                                        as="textarea"


                                        style={{ height: '100px' }}
                                    />
                                </FloatingLabel>
                            </Row>

                            <Row className="mb-3">

                                <Form.Group as={Col}>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email"

                                    >
                                        <Form.Control type="email" />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <FloatingLabel
                                        controlId="floatingInput"


                                    >
                                        <Form.Control className=" p-0 text-white bg-warning fs-6 fw-bold btn" type="Submit" value="Send Message" />
                                    </FloatingLabel>
                                </Form.Group>



                            </Row>


                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GetAppointment;