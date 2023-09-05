import React, { useState } from 'react';
import './sidenav.css';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { menuItems } from '../../utilits/menuItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function SideNav() {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: '0',
    },
    false: {
      left: '-60%',
    },
  };
  console.log(window.innerWidth);
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: '60%' } : { left: '5%' }}
        onClick={() => setExpaned(!expanded)}
      >
        {/* <UilBars /> */}
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        <div className="sideBar">
          <div className="logo">
            <img src={logo} alt="logo" />
            <span>MyCash</span>
          </div>
          <div className="manu">
            {menuItems.map((item, index) => {
              return (
                <div className="manuItem">
                  <span className="icons">{item.icon}</span>
                  <Link to={item.link} className="link">
                    <span>{item.title}</span>
                  </Link>
                </div>
              );
            })}
            <div className="menuItem">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default SideNav;
