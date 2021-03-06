import React from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from '../../../images/logo-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faPhoneSquareAlt, faAddressCard } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        // footer page
        <div className="p-5 bg-dark text-white">
            <Row>
                <Col sm={12} md={4} >
                    <span><FontAwesomeIcon icon={faMailBulk} /> Email us at</span>
                    <br />
                    <small >HouseGenaral@house.com</small>
                    <br />
                    <br />
                    <br />


                    <span><FontAwesomeIcon icon={faPhoneSquareAlt} /> Call us at</span>
                    <br />
                    <small>+8897634567</small>
                    <br />
                    <small>+8897634568</small>
                    <br />
                    <small>+8897634565</small>
                    <br />
                    <small>+8897634564</small>
                    <br />
                    <br />
                    <span><FontAwesomeIcon icon={faAddressCard} /> Address</span>
                    <br />
                    <small>New Eskaton Road, Dhaka 1207, Dhaka, Bangladesh</small>

                </Col>
                <Col sm={12} md={4} className="text-center" >
                    <img height="40px" src={logo} alt="" />
                    <h6 className="text-primary">House General Hospital</h6>
                    <small>Health, Equity Always</small>
                </Col >

                <Col sm={12} md={4} className="mt-2 ">
                    <span ><small>Get Help</small></span>
                    <br />
                    <span ><small>Read Our Blogs</small></span>
                    <br />
                    <span ><small>New Additions</small></span>
                    <br />
                    <span ><small>NewsLetter</small></span>
                    <br />
                    <span ><small>Staffs</small></span>
                    <br />
                    <span ><small>Cabins</small></span>
                    <br />
                    <span><small>Pharmacy</small></span>
                    <br />
                    <br />
                    <br />
                    <div>
                        <i className="fab fa-facebook-square me-3 fs-4"></i>
                        <i className="fab fa-twitter-square me-3 fs-4"></i>
                        <i className="fab fa-youtube me-3 fs-4"></i>
                        <i className="fab fa-instagram fs-4"></i>
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default Footer;