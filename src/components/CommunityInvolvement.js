import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ChallengesRewards from './ChallengesRewards';
import ShareSuccess from './ShareSuccess';
import Toolkit from './Toolkit';
import PartnerWithUs from './PartnerWithUs';
import './CommunityInvolvement.css';

const CommunityInvolvement = () => {
  return (
    <div className="community-involvement">
      <section className="intro">
        <h2>Join the Movement</h2>
        <p>Become part of a growing community committed to reducing food waste.</p>
        <Link to="/join-movement">
          <button>Sign Up Now</button>
        </Link>
      </section>
      <ChallengesRewards />
      <ShareSuccess />
      <Toolkit />
      <PartnerWithUs />
    </div>
  );
};

export default CommunityInvolvement;
