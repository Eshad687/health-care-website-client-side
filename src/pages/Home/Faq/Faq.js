import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faq = ({ faq, index }) => {

    const { que, ans } = faq;
    const indexString = index + ""

    return (
        <Accordion.Item eventKey={indexString}>
            <Accordion.Header ><h6>{que}</h6></Accordion.Header>
            <Accordion.Body>
                {ans}

            </Accordion.Body>
        </Accordion.Item>

    );
};

export default Faq;