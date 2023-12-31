import React from 'react';
import './home.css';
import groupImg from 'assets/group.jpg';
import headerImg from 'assets/main.jgp.avif';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid">
        <div className="section_1">
          <div className="Home_box d-flex flex-column justify-content-center align-items-center gap-4    ">
            <span className="Home_header  ">Manage Your Money</span>
            <button onClick={() => navigate('/register')} className="btnStart">
              Start Here
            </button>
          </div>
          <img src={headerImg} className="img-fluid " alt="" />
        </div>
        <div className="section_2 ">
          <div className="row d-flex ">
            <div className="col-12 col-lg-6  ">
              <img src={groupImg} className="img-fluid " alt="" />
            </div>
            <div className="col-12 col-lg-6  ">
              <div className="Home_text d-inline-flex flex-column gap-4 mt-3 ">
                <div className=" d-flex justify-content-center ">
                  <h3>About Us</h3>
                </div>
                <p>
                  CashFlow is a financial planning firm based in Jerusalem,
                  providing comprehensive financial planning services to
                  individuals and businesses. Our team of experts is dedicated
                  to helping our clients achieve their financial goals by
                  providing them with personalized and customized solutions.
                </p>
                <p>
                  We understand that every client has unique financial needs and
                  goals, and we work closely with them to develop a plan that is
                  tailored to their specific needs. Our goal is to provide our
                  clients with the knowledge and tools they need to make
                  informed financial decisions and achieve financial success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
