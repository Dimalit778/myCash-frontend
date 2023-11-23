import React from 'react';
import './navbar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../../Api/SlicesApi/userApiSlice';
import { logout } from '../../Api/SlicesApi/authSlice';

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
      <Navbar expand="lg" className="nav sticky-top">
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
          <Nav className="ms-auto">
            {!userInfo ? (
              <>
                <Nav.Link as={Link} to="/register" className="links me-2">
                  SignUp
                </Nav.Link>
                <Nav.Link as={Link} to="/login" className="links me-2">
                  Login
                </Nav.Link>
              </>
            ) : (
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
