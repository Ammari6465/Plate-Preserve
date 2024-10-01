import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShareSuccess = () => {
  const navigate = useNavigate();

  // Redirect to the success stories page
  const handleRedirect = () => {
    navigate('/success-stories');
  };

  return (
    <div>
      <style>
        {`
          .share-success {
            background-color: #fdfde1; /* Light beige background */
            padding: 20px;
            border-radius: 5px;
            max-width: 400px;
            margin: 50px auto; /* Centers the form horizontally */
            border: 2px solid black;
            box-shadow: 4px 4px 0 black; /* Creates a shadow effect */
            text-align: center;
          }

          .share-success h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: black;
            margin-bottom: 10px;
          }

          .share-success p {
            font-size: 1rem;
            color: black;
            margin-bottom: 20px;
          }

          .share-success button {
            background-color: black;
            color: beige;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-size: 1.2rem;
            cursor: pointer;
            margin-top: 10px;
          }

          .share-success button:hover {
            background-color: #333;
          }

          .thank-you-message {
            font-size: 1.5rem;
            color: black;
            margin-top: 20px;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .share-success {
              padding: 15px;
              max-width: 90%;
              margin: 30px auto;
            }

            .share-success h2 {
              font-size: 1.2rem;
            }

            .share-success p {
              font-size: 0.9rem;
              margin-bottom: 15px;
            }

            .share-success button {
              font-size: 1rem;
              padding: 8px 16px;
            }

            .thank-you-message {
              font-size: 1.2rem;
              margin-top: 15px;
            }
          }
        `}
      </style>

      <div className="share-success">
        <h2>Share Your Success</h2>
        <p>Post your food-saving stories, tips, and photos to inspire others.</p>

        <button onClick={handleRedirect}>Submit Your Story</button>
      </div>
    </div>
  );
};

export default ShareSuccess;
