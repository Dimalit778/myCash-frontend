import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

// Email Form from emailjs api
// User Send email to my Email Address
const ContactUs = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = 'service_pgot89o';
    const templateId = 'template_n2cr6u9';
    const publicKey = 'DsCLHuGCJtDHKVfG_';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'MyCash Support',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (result) => {
        console.log('email sent successfully', result);
        setName('');
        setEmail('');
        setMessage('');
        toast.success('Email Sent successfully');
      },
      (error) => {
        toast.error('Email wan not sent ');
        console.log(error.text);
      }
    );
  };
  return (
    <div className="container  d-flex flex-column justify-content-center  ">
      <h1 className=" text-center m-5  ">CONTACT US</h1>
      <div className="row justify-content-around       ">
        {/* Left Div - Text */}
        <div
          className="col-sm-12 col-md-5 d-flex flex-column justify-content-between     "
          style={{
            backgroundColor: '#FFF5EE',
            padding: 20,
            border: '1px solid black',
            marginBottom: 20,
          }}
        >
          <h2>Hello, {userInfo.name}</h2>
          <h5 className=" ">
            Our support team can help you with every question you have, You can
            contact us and our team will response you within 24 hours.
          </h5>
          <h4 className="  ">
            Please fill your'e Name , Email and your'e Message.{' '}
          </h4>
        </div>
        {/* Right Div - Content Form */}
        <div
          className=" col-sm-12 col-md-5  "
          style={{
            backgroundColor: 'blueviolet',
            padding: 20,
            border: '3px solid black',
            borderRadius: 10,
            marginBottom: 20,
          }}
        >
          <form onSubmit={sendEmail}>
            <div>
              <input
                style={{
                  border: '2px solid black',
                  borderRadius: 5,
                }}
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-2">
              <input
                style={{ border: '2px solid black', borderRadius: 5 }}
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <textarea
                style={{
                  width: '70%',
                  height: 150,
                  marginTop: 30,
                  border: '2px solid black',
                  borderRadius: 5,
                }}
                cols="20"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              style={{ border: '2px solid black', borderRadius: 5, width: 100 }}
              type="submit"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
