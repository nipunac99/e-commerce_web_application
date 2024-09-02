import React from "react";
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Woman</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur commodi numquam doloremque! Totam nihil, laborum minima
            error veritatis facilis fuga explicabo blanditiis. Odit, saepe.
            Ipsum.
          </span>
        </div>
        <div className="item">
          <h1>Contact Us</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            tempora nam praesentium libero debitis magni sed reiciendis
            architecto expedita nisi nulla modi, ex non distinctio.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">NC STORE</span>
          <span className="copyright">© Copyright 2024. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
