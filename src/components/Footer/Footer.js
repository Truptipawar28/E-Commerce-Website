import React from 'react';
import { BsYoutube, BsSpotify, BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="d-flex justify-content-between align-items-center py-3 px-5 mt-3 bg-dark text-white">
      <div className="d-flex justify-content-between align-items-center">
        <h3>E-Commerce</h3>
        &copy; All rights reserved
      </div>
      <div className="d-flex justify-content-between align-items-center" 
      style={{ width: '300px' }}>
        
        <a href="https://www.youtube.com" className="text-white">
          <BsYoutube size="30px" />
        </a>
        <a href="#" className="text-white">
          <BsSpotify size="30px" />
        </a>
        <a href="#" className="text-white">
          <BsFacebook size="30px" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
