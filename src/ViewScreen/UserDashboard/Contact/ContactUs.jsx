import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

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
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <>
      <div>ContactUs</div>
      <form onSubmit={sendEmail} className="emailForm">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          cols="30"
          rows="30"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send Email</button>
      </form>
    </>
  );
};

export default ContactUs;
