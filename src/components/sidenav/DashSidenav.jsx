import React, { useEffect } from 'react';
import './dashnav.css';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import avatarImg from '../../assets/avatar.jpg';
import { menuItems } from '../../utilits/menuItems.js';
import { useGlobalContext } from '../../Context/globalContext.js';
import { useNavigate } from 'react-router-dom';

const DashSidenav = ({ active, setActive }) => {
  const cookie = new Cookies();
  const navigate = useNavigate();
  const { user, getUserData } = useGlobalContext();

  useEffect(() => {
    // async function getData=>{
    getUserData();
    // }
  }, []);

  const logOut = () => {
    localStorage.clear('user');
    cookie.remove('token');
    navigate('/');
  };

  return (
    <div className="dash ms-3 mt-3  min-vh-100   ">
      {/* // !! { ------- AVATAR -------} */}
      <div className="avatar d-flex justify-content-center   ">
        <img src={avatarImg} className="avatarImg m-4" alt="img"></img>
      </div>
      <div className="userName d-flex justify-content-center mb-2 ">
        <span className="name">{user.firstName}</span>
      </div>
      <div className="underlineDash "></div>
      <ul className="nav nav-pills flex-column gap-4 mt-5 ms-2  ">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? 'active' : ''}
            >
              <span className="icons">{item.icon}</span>

              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div>
        <FontAwesomeIcon icon={faArrowRightFromBracket} className="icons" />
        <button className="logoutBtn" onClick={() => logOut()}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default DashSidenav;
