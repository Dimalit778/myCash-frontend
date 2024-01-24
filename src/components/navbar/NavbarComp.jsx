import React, { useState } from 'react';
import './navbar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from 'Api/SlicesApi/userApiSlice';
import { logout } from 'Api/SlicesApi/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavbarComp = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar expand="lg" className="home_navbar sticky-top">
        {/* <Helmet> */}

        <title>MyCash</title>

        <Navbar.Brand className="fs-4 fw-semibold ms-3 ">
          <div className="">
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/officel/80/000000/money-bag.png"
              alt="money-bag"
              className="me-3"
            />
            MyCash
          </div>
        </Navbar.Brand>
        <Navbar.Toggle className=" me-4 " aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Links ---> Home , About us */}
          <Nav className=" mx-auto gap-2 ">
            <Nav.Link as={Link} to="/" className="navLinks mx-auto   ">
              <h5>Home</h5>
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="navLinks mx-auto ">
              <h5>About Us</h5>
            </Nav.Link>
          </Nav>
          {/* Link ---> User Profile */}
          <Nav className="pt-2">
            {!userInfo ? (
              <>
                {/* --- > LOGIN AND REGISTER BUTTONS < --- */}
                <div className=" d-flex gap-3 pe-3 justify-content-center    ">
                  <button className="logRegBtn">
                    <Nav.Link as={Link} to="/register" className=" me-2">
                      Register
                    </Nav.Link>
                  </button>
                  <button className="logRegBtn">
                    <Nav.Link as={Link} to="/login" className=" me-2">
                      Login
                    </Nav.Link>
                  </button>
                </div>
              </>
            ) : (
              // {/* --- > USERNAME AND LINK TO PROFILE < --- */}
              <NavDropdown title={userInfo.name} id="username" className="me-5">
                {/* <Nav.Link as={Link} to="/login"> */}
                <NavDropdown.Item
                  onClick={() => navigate('/dashboard')}
                  className="me-2"
                >
                  Profile
                </NavDropdown.Item>
                {/* </Nav.Link> */}
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
