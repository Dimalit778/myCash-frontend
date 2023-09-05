import React, { useEffect, useState } from 'react';
import './dashnav.css';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import avatarImg from '../../assets/avatar.jpg';
import { menuItems } from '../../utilits/menuItems.js';
import { useGlobalContext } from '../../Context/globalContext.js';
import { useNavigate } from 'react-router-dom';

const DashSidenav = () => {
  const cookie = new Cookies();
  const navigate = useNavigate();
  const { user, getUserData } = useGlobalContext();

  const [open, setOpen] = useState(true);

  useEffect(() => {
    getUserData();
    console.log(open);
  }, []);

  const logOut = () => {
    localStorage.clear('user');
    cookie.remove('token');
    navigate('/');
  };

  return (
    <>
      {open ? (
        //-------------> Open Side Nav
        <div className="dash min-vh-100">
          <button
            onClick={() => {
              setOpen(false);
            }}
          >
            X
          </button>
          {/* // !! { ------- AVATAR -------} */}
          <div className="avatar d-flex justify-content-center   ">
            <img src={avatarImg} className="avatarImg m-4" alt="img"></img>
          </div>
          <div className="userName d-flex justify-content-center mb-2 ">
            <span className="name">{user.firstName}</span>
          </div>
          <div className="underlineDash "></div>
          <div className="linkslist d-flex flex-column justify-content-evenly   ">
            <ul className="nav nav-pills  flex-column gap-4 mt-5   ">
              {menuItems.map((item) => {
                return (
                  <li
                    key={item.id}
                    className=" d-flex  justify-content-center "
                  >
                    <span className="icons">{item.icon}</span>
                    <Link to={item.link} className="link">
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className=" d-flex justify-content-center align-bottom   ">
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="icons"
              />
              <button className="logoutBtn" onClick={() => logOut()}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      ) : (
        //--------------> Close Side Nav <-------------//
        <div className="dash  min-vh-100   ">
          <button
            onClick={() => {
              setOpen(true);
            }}
          >
            X
          </button>

          <div className=" d-flex justify-content-center mb-2 ">
            <span className="name">{user.firstName}</span>
          </div>
          <div className="underlineDash "></div>
          <div className=" d-flex flex-column justify-content-evenly h-100     ">
            <ul className="navClose list-unstyled ms-3  ">
              {menuItems.map((item) => {
                return (
                  <li
                    key={item.id}
                    className=" d-flex  justify-content-center  mt-3  "
                  >
                    <Link to={item.link} className="link">
                      <span className="iconClose">{item.icon}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="logOut">
              <span className=" ms-4 ">
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  className="iconClose  "
                  onClick={() => logOut()}
                />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashSidenav;
