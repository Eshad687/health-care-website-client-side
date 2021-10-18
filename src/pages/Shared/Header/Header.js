import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo-removebg-preview.png'

const Header = () => {
    return (
        <Navbar className="sticky-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} className="d-flex text-primary" to="/home"><img height="60px" src={logo} alt="" /><h4 >House General <br /> <span>Hospital</span> </h4></Navbar.Brand>
                <Navbar.Toggle className="border-0" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#departments">Departments</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#faqs">FAQ</Nav.Link>
                        <Nav.Link as={NavLink} to="/doctors">Our Doctors</Nav.Link>
                        <Nav.Link as={NavLink} to="/getappointment"> Get Appointment </Nav.Link>
                        <Nav.Link as={NavLink} to="/loginsignup"> Login </Nav.Link>


                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;