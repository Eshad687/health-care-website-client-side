import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo-removebg-preview.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="d-flex text-primary" href="#home"><img height="60px" src={logo} alt="" /><h4 >House General <br /> <span>Hospital</span> </h4></Navbar.Brand>
                <Navbar.Toggle className="border-0" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Services</Nav.Link>
                        <Nav.Link href="#pri">Departments</Nav.Link>
                        <Nav.Link href="#cing">FAQ</Nav.Link>
                        <Nav.Link href="#deets">Doctors</Nav.Link>
                        <Nav.Link href="#memes"> Get Appointment </Nav.Link>
                        <Nav.Link href="#ms"> Login </Nav.Link>


                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;