import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

// Email Form from emailjs api
// User Send email to my Email Address
const ContactUs = () => {
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
    <div className="container">
      <h1 className=" text-center mb-5  ">contact us</h1>
      <div className="col-6 col-sm-12 ">
        <div
          className="form col-12 "
          style={{
            backgroundColor: 'blueviolet',
            padding: 20,
            border: '3px solid black',
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
                  width: 300,
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
