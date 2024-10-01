import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import logo from './components/Logo.png'; 
import CommunityInvolvement from './components/CommunityInvolvement';
import PartnerWithUs from './components/PartnerWithUs';
import LocateFoodBanks from './components/LocateFoodBanks';
import JoinMovement from './components/JoinMovement';
import PartnerForm from './components/PartnerForm'; 
import SuccessStoriesPage from './components/SuccessStoriesPage';
import ShareSuccess from './components/ShareSuccess'; 
import Footer from './components/Footer';
import ChatBot from './components/chatbot'; 
import 'leaflet/dist/leaflet.css';
import './App.css';
import './components/firebase';

function App() {
  useEffect(() => {
     
    document.title = "Plate Preserve";

     
    const changeFavicon = (faviconUrl) => {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = faviconUrl;
    };

    
    changeFavicon(logo);

  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<CommunityInvolvement />} />
          <Route path="/partner" element={<PartnerWithUs />} />
          <Route path="/locate-food-banks" element={<LocateFoodBanks />} />
          <Route path="/join-movement" element={<JoinMovement />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />  
          <Route path="/partner-form" element={<PartnerForm />} />  
          <Route path="/share-success" element={<ShareSuccess />} />  
        </Routes>
        <Footer />
        <ChatBot />  
      </div>
    </Router>
  );
}

export default App;
