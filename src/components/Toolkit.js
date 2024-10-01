import React from 'react';

const Toolkit = () => {
  return (
    <div className="toolkit">
       <style>
        {`
          .toolkit {
            background-color: #fdfde1; /* Light beige background */
            padding: 20px;
            border-radius: 5px;
            max-width: 400px;
            margin: 50px auto; /* Centers the form horizontally */
            border: 2px solid black;
            box-shadow: 4px 4px 0 black; /* Creates a shadow effect */
            text-align: center;
          }

          .toolkit h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: black;
            margin-bottom: 10px;
          }

          .toolkit p {
            font-size: 1rem;
            color: black;
            margin-bottom: 20px;
          }

          .toolkit button {
            background-color: black;
            color: beige;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-size: 1.2rem;
            cursor: pointer;
            margin-top: 10px;
          }

          .toolkit button:hover {
            background-color: #333;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .toolkit {
              padding: 15px;
              max-width: 90%;
              margin: 30px auto;
            }

            .toolkit h2 {
              font-size: 1.2rem;
            }

            .toolkit p {
              font-size: 0.9rem;
              margin-bottom: 15px;
            }

            .toolkit button {
              font-size: 1rem;
              padding: 8px 16px;
            }
          }
        `}
      </style>
      <h2>Food Waste Reduction Toolkit</h2>
      <p>Download resources to help reduce food waste in your household or restaurant.</p>
      <a href="/Food-Waste-Toolkit.pdf" download>
        <button>Download Toolkit</button>
      </a>
    </div>
  );
};

export default Toolkit;
