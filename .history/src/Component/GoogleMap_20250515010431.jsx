import React from 'react';
import './CSS/googlemaps.css';
import exclamination from '../Icons/exclamination.png';

const GoogleMapEmbed = () => {
  return (
    <div className='Map-cont'>
      
    <div className='Contact-us' > <img src={exclamination} className='ex-icon'></img>Contact Us </div>
    <div>
    <div className="google-map-container">
    
   
    <div className='google-map-iframe-cont'>
      <iframe
        className="google-map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.993195316485!2d73.99692947494228!3d17.697781583243245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc23963d1c22b9b%3A0x4131cc6b49f60b37!2sDesignvio%20Pvt%20Ltd%20-%20UI%20UX%20Training!5e0!3m2!1sen!2sin!4v1747139342353!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map Embed"
      ></iframe>
      </div>

      
    </div>
    </div>
  );
};

export default GoogleMapEmbed;
