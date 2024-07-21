import React from 'react';
import { Container } from 'react-bootstrap';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';
import twitter from './images/twitter.png';
import phone from './images/Phone.png';
import email from './images/email.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-4">
      <Container>
        <div className="footer-links">
          <a href="#" className="text-white">Terms Of Service</a>
          <a href="#" className="text-white">Privacy Policy</a>
        </div>
        <div className="follow-us">
          <span>Follow Us</span>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} width="40" height="40" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagram} width="40" height="40" alt="Instagram" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter} width="40" height="40" alt="Twitter" />
            </a>
          </div>
        </div>
        <div className="contact">
          <div className="phone">
            <img src={phone} width="24" height="24" alt="Phone" />
            <span>123-456-789</span>
          </div>
          <div className="email">
            <img src={email} width="24" height="24" alt="Email" />
            <a href="mailto:Kickit@gmail.com" className="text-white">Kickit@gmail.com</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
