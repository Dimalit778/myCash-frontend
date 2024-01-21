import React from 'react';
import monthView from 'assets/pagesPhoto/monthView.png';
import yearView from 'assets/pagesPhoto/yearView.png';
import editView from 'assets/pagesPhoto/editView.png';
import groupImg from 'assets/group.jpg';
const About = () => {
  return (
    <>
      <div className=" ">
        <div className=" section_2 row d-flex ">
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
                individuals and businesses. Our team of experts is dedicated to
                helping our clients achieve their financial goals by providing
                them with personalized and customized solutions.
              </p>
              <p>
                We understand that every client has unique financial needs and
                goals, and we work closely with them to develop a plan that is
                tailored to their specific needs. Our goal is to provide our
                clients with the knowledge and tools they need to make informed
                financial decisions and achieve financial success.
              </p>
            </div>
          </div>
        </div>

        <div className="row middle_section d-flex ">
          <div className="monthView col-md-6  ">
            <h1>View You're monthly transactions</h1>
            <img
              src={monthView}
              style={{ height: '50%', width: '50%' }}
              className=""
              alt=""
            />
          </div>

          <div className="editView col-md-6">
            <h1>You can Add , Edit and Delete transaction</h1>
            <img
              src={editView}
              style={{ height: '50%', width: '50%' }}
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
