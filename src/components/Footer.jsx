import React from 'react';
import facebook from '../assets/images/icon-facebook.svg';
import instagram from '../assets/images/icon-instagram.svg';
import twitter from '../assets/images/icon-twitter.svg';
import pinterset from '../assets/images/icon-pinterest.svg';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <h2>sunnyside</h2>
      <ul className="nav">
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
      </ul>
      <ul className="social_links">
        <li>
          <a href="#"><img src={facebook} alt="faceook link" className="icon social" /></a>
        </li>
        <li>
          <a href="#"><img src={instagram} alt="instagram link" className="icon social" /></a>
        </li>
        <li>
          <a href="#"><img src={twitter} alt="twitter link" className="icon social" /></a>
        </li>
        <li>
          <a href="#"><img src={pinterset} alt="pineterest link" className="icon social" /></a>
        </li>
      </ul>
    </footer>
  );
}
