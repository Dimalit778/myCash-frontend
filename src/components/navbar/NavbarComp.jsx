import React from 'react';
import './navbar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from 'Api/SlicesApi/userApiSlice';
import { logout } from 'Api/SlicesApi/authSlice';

//@ --->  NAVBAR HOME PAGES
const NavbarComp = () => {
  const { userInfo } = useSelector((state) => state.auth);

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
        {/* ----> MyCash Header <---- */}
        <Navbar.Brand className=" ms-3  ">
          <div>
            <img
              width="45"
              height="45"
              src="https://img.icons8.com/officel/80/000000/money-bag.png"
              alt="money-bag"
              className="me-3"
            />
            <span className="title">
              My
              <span className="cLetter">C</span>ash
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle className=" me-4 " aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Links ---> Home , About us */}
          <Nav className=" mx-auto gap-3">
            <Nav.Link as={Link} to="/" className="navLinks mx-auto  ">
              <h5>Home</h5>
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="navLinks mx-auto ">
              <h5>About Us</h5>
            </Nav.Link>
          </Nav>
          {/* Link ---> User Profile */}
          <Nav className="pt-1 d-flex  ">
            {!userInfo ? (
              <>
                {/* --- > LOGIN AND REGISTER BUTTONS < --- */}
                <div className=" d-flex gap-3 pe-3 justify-content-center mx-auto     ">
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
              <NavDropdown
                title={userInfo.name}
                id="username"
                className="userProfile mx-auto p-1     "
              >
                <NavDropdown.Item onClick={() => navigate('/dashboard')}>
                  Profile
                </NavDropdown.Item>

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
