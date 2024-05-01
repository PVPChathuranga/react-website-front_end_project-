import React from 'react';
import './footer.css'; 
import img3 from '../../Images/image3.png';

const Footer = () => {
  return (
    <div className='footer-container'>
     <footer className='main-footer'>
        <div className='footer'>
        <div className="left">
            <img src={img3} alt="Logo" className="logo" />
            <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
        </div>
        <div className="middle">
            <h4>Our Technologies</h4>
            <ul>
            <li><a href="#">ReactJS</a></li>
            <li><a href="#">Gatsby</a></li>
            <li><a href="#">NextJS</a></li>
            <li><a href="#">NodeJS</a></li>

            </ul>
        </div>
        <div className="right">
            <h4>Our Services</h4>
            <ul>
            <li><a href="#">Social media Marketing</a></li>
            <li><a href="#">Web & Mobile App Development</a></li>
            <li><a href="#">Data & Analytics</a></li>

            </ul>
        </div>
        </div>
        <div className='bottom-content'>
            <hr />
            <div className="bottom">
                <p>Privacy Policy | Terms & Conditions</p>
            </div>
        </div>

        </footer>
    </div>
    
  );
};

export default Footer;
