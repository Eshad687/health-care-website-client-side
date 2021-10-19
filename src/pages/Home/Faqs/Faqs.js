import React, { useEffect, useState } from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import Faq from '../Faq/Faq';

const Faqs = () => {
    //state for faqs
    const [faqs, setFaqs] = useState([]);

    //fetching faqs data
    useEffect(() => {
        fetch('/faq.json')
            .then(res => res.json())
            .then(data => setFaqs(data))
    }, [])

    return (
        // faq section
        <div id="faqs" className="m-5 pt-5 ">
            <h2 className="text-center pb-5">FREQUENTLY ASKED <span className="border-bottom border-3 border-primary text-primary">QUESTIONS</span> </h2>
            <Row>

                {/* faq image */}

                <Col xs={12} md={6}>
                    <img height="94%" className="w-100" src="https://image.freepik.com/free-vector/doctor-nurse-giving-medical-care-patient-bed-isolated-flat-illustration_74855-10593.jpg" alt="" />
                </Col>
                {/* faq accordians */}
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