import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    // getting data from authentication context api
    const { user, logOut, setErrorMessage } = useAuth();

    return (
        // header navbar
        <Navbar className="sticky-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} className="d-flex text-primary" to="/home"><img height="60px" src={logo} alt="" /><h4 >House General <br /> <span>Hospital</span> </h4></Navbar.Brand>
                <Navbar.Toggle className="border-0" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#departments">Departments</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#faqs">FAQs</Nav.Link>
                        <Nav.Link as={NavLink} to="/doctors">Our Doctors</Nav.Link>
                        <Nav.Link as={NavLink} to="/getappointment"> Get Appointment </Nav.Link>
                        {user?.email && <span className="text-white mx-3 my-auto">{user.displayName}</span>}
                        {
                            user.email ? <Button variant="danger" onClick={logOut} className="px-3 py-1 rounded-3 border-0 btn">Log out <FontAwesomeIcon icon={faSignOutAlt} /></Button> :
                                <Nav.Link onClick={() => setErrorMessage('')} as={NavLink} to="/loginsignup"> Login <FontAwesomeIcon icon={faSignInAlt} /> </Nav.Link>
                        }



                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;