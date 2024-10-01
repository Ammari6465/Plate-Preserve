import React, { useState, useEffect } from 'react';
import { db } from './firebase'; // Make sure this imports your Firestore instance
import { collection, addDoc, getDocs } from 'firebase/firestore';

const SuccessStoriesPage = () => {
  const [stories, setStories] = useState([]);
  const [formData, setFormData] = useState({ name: '', story: '' });

  // Fetch stories from Firestore when the component mounts
  useEffect(() => {
    const fetchStories = async () => {
      const querySnapshot = await getDocs(collection(db, 'Success Stories'));
      const fetchedStories = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStories(fetchedStories);
    };

    fetchStories();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add the new story to Firestore
      await addDoc(collection(db, 'Success Stories'), {
        name: formData.name,
        story: formData.story,
      });

      // After successful submission, fetch the updated list of stories
      const querySnapshot = await getDocs(collection(db, 'Success Stories'));
      const fetchedStories = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Update the local state with the new story list
      setStories(fetchedStories);

      // Clear the form
      setFormData({ name: '', story: '' });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div>
      <style>
        {`
          :root {
            --input-focus: #2d8cf0;
            --font-color: #323232;
            --font-color-sub: #666;
            --bg-color: beige;
            --main-color: black;
          }

          /* Page Container */
          .page-container {
            padding: 40px 20px; /* Adding top/bottom padding */
            background-color: white;
          }

          /* Navbar/Footer Spacing */
          .form-container {
            padding: 40px; /* Adds extra padding around the form */
            background: lightblue;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
            border-radius: 5px;
            border: 2px solid var(--main-color);
            box-shadow: 4px 4px var(--main-color);
            max-width: 400px;
            margin: 0 auto;
            margin-top: 80px; /* Space from the navbar */
            margin-bottom: 80px; /* Space from the footer */
          }

          .title {
            color: var(--font-color);
            font-weight: 900;
            font-size: 20px;
            margin-bottom: 25px;
          }

          .form {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 15px;
          }

          .form-group {
            display: flex;
            flex-direction: column;
          }

          .form-group label {
            font-weight: bold;
            margin-bottom: 5px;
            color: var(--font-color);
          }

          .input {
            width: 100%;
            height: 40px;
            border-radius: 5px;
            border: 2px solid var(--main-color);
            background-color: var(--bg-color);
            box-shadow: 4px 4px var(--main-color);
            font-size: 15px;
            font-weight: 600;
            color: var(--font-color);
            padding: 5px 10px;
            outline: none;
          }

          .input::placeholder {
            color: var(--font-color-sub);
            opacity: 0.8;
          }

          .input:focus {
            border: 2px solid var(--input-focus);
          }

          .button-confirm {
            width: 100%;
            height: 40px;
            border-radius: 5px;
            border: 2px solid var(--main-color);
            background-color: var(--bg-color);
            box-shadow: 4px 4px var(--main-color);
            font-size: 17px;
            font-weight: 600;
            color: var(--font-color);
            cursor: pointer;
            margin-top: 20px;
          }

          .button-confirm:active {
            box-shadow: 0px 0px var(--main-color);
            transform: translate(3px, 3px);
          }

          /* Modal Styles */
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }

          .modal-content {
            background: var(--bg-color);
            padding: 20px;
            border-radius: 10px;
            width: 80%;
            max-width: 400px;
            text-align: center;
            box-shadow: 4px 4px var(--main-color);
          }

          .modal-content h2 {
            margin: 0;
            font-family: 'Poppins', sans-serif;
            color: var(--font-color);
          }

          .modal-content p {
            margin: 20px 0;
            font-family: 'Roboto', sans-serif;
            color: var(--font-color-sub);
          }

          .modal-content button {
            background-color: var(--bg-color);
            color: var(--font-color);
            border: 2px solid var(--main-color);
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 5px;
            font-size: 1rem;
            box-shadow: 4px 4px var(--main-color);
            transition: all 0.3s ease;
          }

          .modal-content button:hover {
            background-color: lightgray;
          }
        `}
      </style>

      <div className="page-container">
        <div className="form-container">
          <h2 className="title">Share Your Success Story</h2>

          {/* Form for submitting a new story */}
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                className="input"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="story">Your Story:</label>
              <textarea
                className="input"
                id="story"
                name="story"
                rows="4"
                value={formData.story}
                onChange={handleChange}
                placeholder="Share your success story..."
                required
              ></textarea>
            </div>

            <button className="button-confirm" type="submit">
              Submit Your Story
            </button>
          </form>

          {/* Display the list of success stories */}
          <div>
            {stories.map((story) => (
              <div key={story.id} className="success-story">
                <h4>{story.name}</h4>
                <p>{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesPage;
