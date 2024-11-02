import React from 'react';
import { FaFacebook, FaGoogle, FaTelegram, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-primary to-secondary pt-12 pb-8 text-white'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company Details */}
          <div className='space-y-6'>
            <h1 data-aos="fade-up" className='text-4xl font-bold'>JuicyMarket</h1>
            <p className='text-sm max-w-[300px]'>Bringing you the freshest fruits with premium quality. From farm to table, we ensure every fruit is carefully selected for maximum taste and nutrition.</p>
          </div>
          
          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="300" className='space-y-6'>
            <h1 className='text-4xl font-bold'>Quick Links</h1>
            <ul className='grid grid-cols-2 gap-3'>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Search Fruits</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          {/* Social and Contact Section */}
          <div data-aos="fade-up" data-aos-delay="300" className='space-y-6'>
            <h1 className='text-4xl font-bold'>Follow Us</h1>
            <div> 
              <p>+1 (123) 456-789</p>
              <p>Karnataka, Bangalore</p>
            </div>
            <div className='flex items-center gap-3'>
              <a href="#" aria-label="Facebook">
                <FaFacebook className='text-3xl hover:scale-105 duration-300' />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className='text-3xl hover:scale-105 duration-300' />
              </a>
              <a href="#" aria-label="Telegram">
                <FaTelegram className='text-3xl hover:scale-105 duration-300' />
              </a>
              <a href="#" aria-label="Google">
                <FaGoogle className='text-3xl hover:scale-105 duration-300' />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <p className='text-white text-center mt-8 pt-8 border-t-2'>
          &copy; 2024 Saurav Kumar. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
