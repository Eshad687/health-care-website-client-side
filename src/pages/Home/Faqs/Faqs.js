import React, { useEffect, useState } from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import Faq from '../Faq/Faq';

const Faqs = () => {

    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        fetch('./faq.json')
            .then(res => res.json())
            .then(data => setFaqs(data))
    }, [])

    return (
        <div className="p-5">
            <h3 className="mb-3">Frequently Asked Questions</h3>
            <Row>



                <Col xs={12} md={6}>
                    <img height="94%" className="w-100" src="https://image.freepik.com/free-vector/doctor-nurse-giving-medical-care-patient-bed-isolated-flat-illustration_74855-10593.jpg" alt="" />
                </Col>

                <Col xs={12} md={6}>
                    <Accordion defaultActiveKey="0">
                        {
                            faqs?.map(faq => <Faq
                                key={faq.id}
                                faq={faq}
                                index={+faqs?.indexOf(faq)}

                            >

                            </Faq>)
                        }
                    </Accordion>
                </Col>
            </Row>
        </div>
    );
};

export default Faqs;