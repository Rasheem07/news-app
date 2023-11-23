import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              Welcome to our online store! We provide a wide range of high-quality products to
              enhance your lifestyle. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Our Services</h5>
            <div>
              <p className='p-0 m-1'>Fast and Free Shipping</p>
              <p className='p-0 m-1'>24/7 Customer Support</p>
              <p className='p-0 m-1'>Easy Returns and Exchanges</p>
              <p className='p-0 m-1'>Secure Online Payments</p>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <h5>Contact Info</h5>
            <p>
              Address: 123 Main Street, Cityville, State, 12345
              <br />
              Phone: +1 (555) 123-4567
              <br />
              Email: info@example.com
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <h5>Follow Us</h5>
            <p>Stay connected with us on social media for updates and more:</p>
            {/* Add social media icons */}
            <div>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className="icons me-3 text-light" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} className="icons me-3 text-light" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} className="icons me-3 text-light" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} className="icons me-3 text-light" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
