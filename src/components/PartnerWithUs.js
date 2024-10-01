import React from 'react';
import { Link } from 'react-router-dom';

const PartnerWithUs = () => {
  return (
    <div className="form-container">
      <style>
        {`
          .form-container {
            background-color: beige;
            padding: 40px;
            border-radius: 5px;
            max-width: 600px;
            margin: 100px auto; /* Centers the form horizontally and adds top spacing */
            border: 2px solid black;
            box-shadow: 4px 4px black;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .form-container h2 {
            font-size: 2rem;
            font-weight: 900;
            color: #323232;
            margin-bottom: 10px;
          }

          .form-container p {
            font-size: 1.2rem;
            color: #666;
            margin-bottom: 40px;
            text-align: center;
          }

          .form-container button {
            background-color: black;
            color: beige;
            padding: 12px 20px;
            border: none;
            border-radius: 5px;
            font-size: 1.2rem;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .form-container button:hover {
            background-color: #333;
          }
        `}
      </style>
      <h2>Partner with Us</h2>
      <p>Join forces with us to fight food waste by becoming a partner.</p>
      <Link to="/partner-form">
        <button>Become a Partner</button>
      </Link>
    </div>
  );
};

export default PartnerWithUs;
