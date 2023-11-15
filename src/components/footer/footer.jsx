import React from 'react';
import './footer.css';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="footer-container mt-5 ">
      <div className=" d-lg-flex  flex-row justify-content-evenly ">
        {/* //{ ------- CONTACT FOOTER -------} */}
        <div className="ft1 mx-auto    ">
          <h2>Contact Us</h2>
          <ul className="Footerlist list-unstyled ">
            <li>Israel</li>
            <li>Tel Aviv</li>
            <li>Travel@gmail.com</li>
            <li>Phone : +925 525555555</li>
          </ul>
        </div>
        {/* // { ------- EXPLORE FOOTER -------} */}
        <div className=" mx-auto ">
          <h2>Explore</h2>
          <ul className="Footerlist list-unstyled ">
            <li>Write a review</li>
            <li>Add a Place</li>
            <li>Blog</li>
            <li>Help Center</li>
          </ul>
        </div>
        {/* //  { ------- DESCRIPTION FOOTER -------} */}
        <div className=" mx-auto ">
          <h2>Staff</h2>
          <ul className="Footerlist list-unstyled">
            <li>Write a review</li>
            <li>Add a Place</li>
            <li>Blog</li>
            <li>Help Center</li>
          </ul>
        </div>
      </div>
      {/* //  { ------- ICONS -------} */}
      {/*//? NEED TO FIX THE ICONS */}

      <div className="footer-icos d-flex justify-content-center">
        {/* <FacebookIcon />
        <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
        <p>twitter</p>
        <p>youtube</p>
      </div>
      {/* //  { ------- UNDER LINE -------} */}
      <div className="underline mx-auto"></div>
      {/* //  { ------- BOTTOM FOOTER -------} */}
      <div className="footer-bottom d-flex justify-content-center ">
        <p>
          &copy;{new Date().getFullYear()} Travel App - All Rights Reserved{' '}
        </p>
      </div>
    </div>
  );
};

export default Footer;
