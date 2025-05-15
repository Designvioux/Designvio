import React from 'react';
import './CSS/Contactus.css';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src="../Images/DLogo.png" alt="Designvio Logo" className="footer-logo" />
          {/* <h2>DESIGNVIO<br />(OPC) PVT LTD</h2> */}

          <nav className="footer-page">
            <a className='link-c' href="#about">ABOUT-US</a>
            <a className='link-c'  href="#team">TEAM</a>
            <a className='link-c' href="#services">SERVICES</a>
            <a className='link-c' href="#work">PORTFOLIO</a>
            <a className='link-c' href="#faqs">FAQ-S</a>
            <a className='link-c' href="#process">THE PROCESS</a>
          </nav>

          <div className="footer-address">
            <h3>Address</h3>
            <p>Branch 1: Designvio 523/B Karanje Peth, Satara.</p>
            <p>Branch 2: Designvio AssemblyRd, New Shahupuri, Kolhapur.</p>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-box">
            <h3 className='touch'>GET IN TOUCH</h3>
            <p className='tel-link'>Tel: <a className='tel-link' href="tel:‪+917058035999‬">‪+91 7058035999‬</a> / <a className='tel-link' href="tel:‪+917875010115‬">‪+91 7875010115‬</a></p>
            <hr />
            <h3 className='follow'>FOLLOW US</h3>
            <div className="social-icons">
              <a className='social-link' href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a className='social-link' href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a className='social-link' href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Copyright <strong className='cp'>Designvio</strong></p>
        <p>
       
        </p>
      </div>
    </footer>
  );
};

export default Contact;