import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faq = ({ faq, index }) => {

    const { que, ans } = faq;
    const indexString = index + ""

    return (
        // each question and answer
        <Accordion.Item className="card mb-2 border rounded-3" eventKey={indexString}>
            <Accordion.Header ><h6>{que}</h6></Accordion.Header>
            <Accordion.Body className="text-muted">
                {ans}

            </Accordion.Body>
        </Accordion.Item>

    );
};

export default Faq;