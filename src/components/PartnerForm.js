import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase'; // Import the Firestore database
import emailjs from 'emailjs-com'; // Import EmailJS

const PartnerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  // Remove formSubmitted and alertMessage if you don't need them in the UI.
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = () => {
    const templateParams = {
      name: formData.name,
      email: formData.email, // Add the collected email here
      message: formData.message,
      to_email: formData.email, // Use this for the To Email field in your template
    };

    // Replace the following placeholders with your actual IDs
    const SERVICE_ID = 'service_tvxl4lu';
    const TEMPLATE_ID = 'template_2sz9n15';
    const USER_ID = 'XPhT0FIx8TjWbTgD8'; // This is your Public Key

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.error('There was an error sending the email:', error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add the form data to Firestore (the "Partner" collection)
      await addDoc(collection(db, 'Partner'), formData);
      setAlertMessage(`Thank you for reaching out, ${formData.name}! We will get back to you soon.`);
      setFormSubmitted(true);

      // Send the email
      sendEmail();

      // Clear form
      setFormData({ name: '', email: '', organization: '', message: '' });
    } catch (error) {
      console.error('Error adding document: ', error);
      setAlertMessage('There was an error submitting the form. Please try again.');
    }
  };

  return (
      <div className="partner-form">
        <style>{`
          .partner-form {
            background-color: #add8e6; /* Light blue background */
            padding: 40px;
            border-radius: 10px;
            max-width: 500px;
            margin: 50px auto;
            border: 2px solid black;
            box-shadow: 6px 6px 0px black;
            font-family: 'Arial', sans-serif;
          }
  
          .partner-form h2 {
            font-size: 2rem;
            color: #323232;
            text-align: center;
            margin-bottom: 20px;
            font-weight: bold;
          }
  
          .partner-form label {
            font-weight: bold;
            font-size: 1rem;
            margin-bottom: 5px;
            display: block;
            color: #323232;
          }
  
          .partner-form input,
          .partner-form textarea {
            width: 100%;
            padding: 12px;
            margin-bottom: 15px;
            border-radius: 8px;
            border: 2px solid #ccc;
            box-shadow: 3px 3px 0px black;
            background-color: #fdfde1; /* Beige background */
          }
  
          .partner-form textarea {
            resize: none;
          }
  
          .partner-form button {
            background-color: #fdfde1;
            color: black;
            border: 2px solid #d3d3b8;
            box-shadow: 3px 3px 0px black;
            padding: 12px 30px;
            font-size: 1.2rem;
            cursor: pointer;
            transition: transform 0.2s;
            margin-top: 10px;
            border-radius: 10px;
            display: block;
            margin: 0 auto;
          }
  
          .partner-form button:hover {
            background-color: #e0daba;
            transform: scale(1.05);
          }
  
          .alert-message {
            margin-top: 20px;
            padding: 15px;
            border-radius: 5px;
            font-size: 1rem;
            text-align: center;
          }
  
          .alert-success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
          }
  
          .alert-error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
          }
  
          @media (max-width: 768px) {
            .partner-form {
              padding: 20px;
              max-width: 90%;
            }
  
            .partner-form h2 {
              font-size: 1.5rem;
            }
  
            .partner-form button {
              font-size: 1rem;
              padding: 10px 20px;
            }
          }
        `}</style>
      <h2>Partner with Us</h2>
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="organization">Organization (if applicable):</label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>{alertMessage}</p>
      )}
    </div>
  );
};

export default PartnerForm;
