'use client';
import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaPinterest,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">JOIN OUR NEWSLETTER</h3>
            <p className="text-gray-400 mb-4">Sign up for our e-mail to get the latest news.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Please enter your email to subscribe"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button className="bg-primary text-white font-semibold px-6 py-2 rounded-r-lg hover:bg-opacity-90 transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">ABOUT US</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-center">
                <span>M-F 9am-5pm EST</span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>Fox Mountain Rd, South Fork, CO 81154, USA</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <span>+0123.456.8386</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>demo@towerthemes.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">INFORMATION</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Delivery Information</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">CUSTOMER SERVICE</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Site Map</a></li>
              <li><a href="#" className="hover:text-white">Wish List</a></li>
              <li><a href="#" className="hover:text-white">Brands</a></li>
              <li><a href="#" className="hover:text-white">Gift Certificates</a></li>
              <li><a href="#" className="hover:text-white">Affiliate</a></li>
              <li><a href="#" className="hover:text-white">Specials</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 ">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
          
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaPinterest /></a>
          </div>
          <div className="text-gray-500 text-sm mb-4 md:mb-4">
            Mikaela Nyamasoka. Copyright © 2025
          </div>
          <div className="flex items-center space-x-2">
            <img src="https://res.cloudinary.com/dmlavu7is/image/upload/v1720782358/bitcoin_g22gmq.png" alt="Bitcoin" className="h-6" />
            <img src="https://res.cloudinary.com/dmlavu7is/image/upload/v1720782358/paypal_jwxttr.png" alt="PayPal" className="h-6" />
            <img src="https://res.cloudinary.com/dmlavu7is/image/upload/v1720782358/mastercard_ftlxk4.png" alt="Mastercard" className="h-6" />
            <img src="https://res.cloudinary.com/dmlavu7is/image/upload/v1720782358/visa_sm3ymi.png" alt="Visa" className="h-6" />
          </div>
        </div>
      </div>
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-4 right-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;