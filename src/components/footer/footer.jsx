import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCity,
  faEarthAmericas,
  faEnvelope,
  faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="footer-container mt-5 ">
      <div className=" d-lg-flex  flex-row justify-content-evenly ">
        {/* // !! { ------- CONTACT FOOTER -------} */}
        <div className=" mx-auto  ft1  ">
          <h2>Contact Us</h2>
          <ul className="list list-unstyled ">
            <li>
              <FontAwesomeIcon icon={faEarthAmericas} /> Israel
            </li>
            <li>
              <FontAwesomeIcon icon={faCity} />
              Tel Aviv
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> Travel@gmail.com
            </li>
            <li>
              <FontAwesomeIcon icon={faPhoneVolume} /> Phone : +925 525555555
            </li>
          </ul>
        </div>
        {/* // !! { ------- EXPLOR FOOTER -------} */}
        <div className=" mx-auto ">
          <h2>Explore</h2>
          <ul className="list list-unstyled">
            <li>Write a review</li>
            <li>Add a Place</li>
            <li>Blog</li>
            <li>Help Center</li>
          </ul>
        </div>
        {/* // !! { ------- DESCRIPTION FOOTER -------} */}
        <div className=" mx-auto ">
          <h2>Staff</h2>
          <ul className="list list-unstyled">
            <li>Write a review</li>
            <li>Add a Place</li>
            <li>Blog</li>
            <li>Help Center</li>
          </ul>
        </div>
      </div>
      {/* // !! { ------- ICONS -------} */}
      <div className="footer-icos d-flex justify-content-center">
        <p>
          <FontAwesomeIcon icon={faFacebookSquare} />
        </p>
        <p>
          <FontAwesomeIcon icon={faInstagramSquare} />
        </p>
        <p>
          <FontAwesomeIcon icon={faTwitterSquare} />
        </p>
        <p>
          <FontAwesomeIcon icon={faYoutube} />
        </p>
      </div>
      {/* // !! { ------- UNDER LINE -------} */}
      <div className="underline mx-auto"></div>
      {/* // !! { ------- BOTTOM FOOTER -------} */}
      <div className="footer-bottom d-flex justify-content-center ">
        <p>
          &copy;{new Date().getFullYear()} Travel App - All Rights Reserved{' '}
        </p>
      </div>
    </div>
  );
};

export default Footer;
