import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import image1 from './image1.jpg';
import image2 from './iamge2.jpg';
import image3 from './image3.jpg';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="slideshow">
          <div className="slide" style={{ backgroundImage: `url(${image1})` }}></div>
          <div className="slide" style={{ backgroundImage: `url(${image2})` }}></div>
          <div className="slide" style={{ backgroundImage: `url(${image3})` }}></div>
        </div>
        <div className="hero-content">
          <h1>Together, Let's Reduce Food Waste</h1>
          <p>Join our movement to save food and feed more people.</p>
          <Link to="/join-movement">
            <button>Join the Movement</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
