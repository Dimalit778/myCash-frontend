import React, { useEffect } from 'react';
import './navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
// import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../Context/globalContext.js';

const NavbarComp = () => {
  const { user } = useGlobalContext();
  useEffect(() => {}, [user]);
  return (
    <div>
      <Navbar expand="lg" className="nav sticky-top">
        {/* <Helmet> */}
        <title>MyCash</title>
        {/* </Helmet> */}
        <Navbar.Brand className="fs-4 fw-semibold ms-5">MyCash</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto  ">
            <Nav.Link as={Link} to="/" className="links me-5">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/about" className="links me-5">
              about
            </Nav.Link>
          </Nav>
          <Nav>
            {!user ? (
              <>
                <Nav.Link as={Link} to="/register" className="links me-2">
                  SignUp
                </Nav.Link>
                <Nav.Link as={Link} to="/login" className="links me-2">
                  Login
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/dashboard" className="links me-2">
                {user.firstName}
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
