import React, { useEffect } from 'react';
import './sidenav.css';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { menuItems } from '../../utilits/menuItems';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { useGlobalContext } from '../../Context/globalContext';

function SideNav() {
  const { getUserData } = useGlobalContext();

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div className="sideBar min-vh-100 ">
        <div className="top logo d-flex ">
          <img src={logo} alt="logo" className="logoImg" />
          <span>MyCash</span>
        </div>
        <hr />
        <div className="center ps-3 ">
          {menuItems.map((item, index) => {
            return (
              <div key={index} className="manuItem   p-0 m-0 ">
                <span className="icons">{item.icon}</span>
                <Link to={item.link} className="link ">
                  <span>{item.title}</span>
                </Link>
              </div>
            );
          })}
          <div className="manuItem">
            <span className="icons">
              <ExitToAppOutlinedIcon />
            </span>

            <span>Logout</span>
          </div>
          <div className="bottom d-flex  align-items-center m-5">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNav;
