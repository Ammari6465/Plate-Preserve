import React, { useState } from 'react';
import { db } from './firebase'; 
import { collection, addDoc } from 'firebase/firestore';

const ChallengesRewards = () => {
  const [formData, setFormData] = useState({ name: '', email: '', challenge: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'ChallengesRewards'), {
        name: formData.name,
        email: formData.email,
        challenge: formData.challenge,
        timestamp: new Date(), 
      });

      setFormSubmitted(true);
      setFormData({ name: '', email: '', challenge: '' });
    } catch (error) {
      console.error('Error submitting form data to Firestore:', error);
    }
  };

  return (
    <div className="form-container">
      <style>
        {`
          .form-container {
            background-color: #fdfde1; /* Light beige background */
            padding: 20px;
            border-radius: 5px;
            max-width: 400px;
            margin: 50px auto; /* Centers the form horizontally */
            border: 2px solid black;
            box-shadow: 4px 4px 0 black; /* Creates a shadow effect */
            text-align: center;
          }

          .form-container h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: black;
            margin-bottom: 10px;
          }

          .form-container p {
            font-size: 1rem;
            color: black;
            margin-bottom: 20px;
          }

          .form-container input,
          .form-container select {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border-radius: 5px;
            border: 1px solid black;
            background-color: #fdfde1;
            font-size: 1rem;
            color: black;
          }

          .form-container input:focus,
          .form-container select:focus {
            outline: none;
            border: 1px solid #2d8cf0; /* Light blue focus border */
          }

          .form-container button {
            background-color: black;
            color: beige;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-size: 1.2rem;
            cursor: pointer;
            margin-top: 10px;
          }

          .form-container button:hover {
            background-color: #333;
          }

          .thank-you-message {
            font-size: 1.5rem;
            color: black;
            margin-top: 20px;
          }
        `}
      </style>

      {!formSubmitted ? (
        <div>
          <h2>Challenges Reward</h2>
          <p>Be a Part of the Challenge and make Food Waste Reduction Interesting!</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <select
              name="challenge"
              value={formData.challenge}
              onChange={handleChange}
              required
            >
              <option value="">Select a Challenge</option>
              <option value="Zero-Waste Kitchen Challenge">Zero-Waste Kitchen Challenge</option>
              <option value="Creative Leftovers Challenge">Creative Leftovers Challenge</option>
              <option value="Restaurant Donation Drive">Restaurant Donation Drive</option>
            </select>
            <button type="submit">Join Now</button>
          </form>
        </div>
      ) : (
        <div className="thank-you-message">
          Thank you for joining the challenge! We'll be in touch soon.
        </div>
      )}
    </div>
  );
};

export default ChallengesRewards;
