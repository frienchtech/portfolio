import React from "react";
import "../cssFiles/Footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerMainContainer">
          <div className="box1">
            <h2>
              <span>Friench</span>Tech
            </h2>
            <p>
              Welcome to FrienchTech! We specialize in creating captivating
              websites that drive results. Let our team craft a unique digital
              experience tailored to your brand's needs. Elevate your online
              presence with us!
            </p>
            <div className="icons">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="box2">
            <h3>EXPLORE</h3>
            <a href="#">Core Values</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact</a>
          </div>
          <div className="box3">
            <h3>CONTACT</h3>
            <div className="address">
              <i class="fa-solid fa-house"></i>
              <p>MB 33 Mansrovar Complex Bhopal M.P.- 462016</p>
            </div>
            <div className="email">
              <i class="fa-solid fa-envelope"></i>
              <p>info@frienchtech.com</p>
            </div>
            <div className="call">
              <i class="fa-solid fa-phone"></i>
              <p>0755 461 1870</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
