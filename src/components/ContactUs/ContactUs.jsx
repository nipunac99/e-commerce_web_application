import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';


import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <div className="contactus">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
            <FacebookIcon />
            <InstagramIcon />
            <XIcon />
            <GoogleIcon />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
