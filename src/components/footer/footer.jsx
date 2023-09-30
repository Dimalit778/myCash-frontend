import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-container mt-5 ">
      <div className=" d-lg-flex  flex-row justify-content-evenly ">
        {/* // !! { ------- CONTACT FOOTER -------} */}
        <div className="ft1 mx-auto    ">
          <h2>Contact Us</h2>
          <ul className="Footerlist list-unstyled ">
            <li>Israel</li>
            <li>Tel Aviv</li>
            <li>Travel@gmail.com</li>
            <li>Phone : +925 525555555</li>
          </ul>
        </div>
        {/* // !! { ------- EXPLOR FOOTER -------} */}
        <div className=" mx-auto ">
          <h2>Explore</h2>
          <ul className="Footerlist list-unstyled ">
            <li>Write a review</li>
            <li>Add a Place</li>
            <li>Blog</li>
            <li>Help Center</li>
          </ul>
        </div>
        {/* // !! { ------- DESCRIPTION FOOTER -------} */}
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
      {/* // !! { ------- ICONS -------} */}
      <div className="footer-icos d-flex justify-content-center">
        <p>facebook</p>
        <p>instegram</p>
        <p>twitter</p>
        <p>youtube</p>
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
