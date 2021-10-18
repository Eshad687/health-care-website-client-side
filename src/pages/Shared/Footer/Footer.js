import React from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from '../../../images/logo-removebg-preview.png'

const Footer = () => {
    return (
        <div className="p-5 bg-dark text-white">
            <Row>
                <Col sm={12} md={4} >
                    <span>Email us at</span>
                    <br />
                    <small >HouseGenaral@house.com</small>
                    <br />
                    <br />
                    <br />


                    <span>Call Us at</span>
                    <small>+8897634567</small>
                    <br />
                    <small>+8897634568</small>
                    <br />
                    <small>+8897634565</small>
                    <br />
                    <small>+8897634564</small>
                    <br />
                    <br />
                    <span>Address</span>
                    <br />
                    <small>New Eskaton Road, Dhaka 1207, Dhaka, Bangladesh</small>

                </Col>
                <Col sm={12} md={4} className="text-center" >
                    <img height="40px" src={logo} alt="" />
                    <h6 className="text-primary">House General Hospital</h6>
                    <small>Health, Equity Always</small>
                </Col >

                <Col sm={12} md={4} className="mt-2 ">
                    <span className="ms-3"><small>Get Help</small></span>
                    <span className="ms-3"><small>Read Our Blogs</small></span>
                    <span className="ms-3"><small>New Additions</small></span>
                    <span className="ms-3"><small>Success Stories</small></span>
                    <span className="ms-3"><small>NewsLetter</small></span>
                    <span className="ms-3"><small>Staffs</small></span>
                    <span className="ms-3"><small>Cabins</small></span>
                    <span className="ms-3"><small>Pharmacy</small></span>
                </Col>

            </Row>
        </div>
    );
};

export default Footer;