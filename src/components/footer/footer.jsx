import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faSquareInstagram,
  faSquareYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer-container mt-3  ">
      <div className=" d-lg-flex  flex-row justify-content-evenly ">
        {/* //{ ------- CONTACT FOOTER -------} */}
        <div className="ft1 mx-auto    ">
          <h2>Contact Us</h2>
          <ul className="Footerlist list-unstyled ">
            <li>Israel</li>
            <li>Tel Aviv</li>
            <li>Dimalit778@gmail.com</li>
            <li>Phone : +925 526731280</li>
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

      <div className="footer-icos d-flex justify-content-center gap-5 mb-1  ">
        {/* FaceBook Icon - Link to Facebook account */}
        <a rel="stylesheet" href="https://www.facebook.com/dima.litvinov1">
          <FontAwesomeIcon icon={faFacebook} size="2xl" color="black" />
        </a>
        {/* Instagram Icon - Link to Instagram account */}
        <a rel="stylesheet" href="https://www.instagram.com/dima1litvinov/">
          <FontAwesomeIcon icon={faSquareInstagram} size="2xl" color="black" />
        </a>
        {/* YouTube Icon - Link to Youtube account */}
        <a rel="stylesheet" href="https://www.instagram.com/dima1litvinov/">
          <FontAwesomeIcon icon={faSquareYoutube} size="2xl" color="black" />
        </a>
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
