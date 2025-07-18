import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-[#1a1c22] text-white py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          {/* Logo and Socials */}
          <div>
            {/* <h1 className="text-2xl font-bold ">YourLogo</h1> */}
            <a href="/">
  <img src="logowhite.png" alt="Logo" className="mb-4 w-40" />
</a>

            <div className="flex gap-4 mb-6">
              <a href="https://facebook.com/Kadambangroups/
"> <FaFacebookF className="cursor-pointer hover:text-[#ff4a2a]" /></a>
           <a href="https://x.com/KadambanGroup"><FaTwitter className="cursor-pointer hover:text-[#ff4a2a]" /></a>   
             <a href="https://instagram.com/kadamban_architect

"><FaInstagram className="cursor-pointer hover:text-[#ff4a2a]" /></a>  
             <a href="https://in.pinterest.com/kadambanarchitect/"><FaPinterest className="cursor-pointer hover:text-[#ff4a2a]" /></a> 
              <a href="https://youtube.com/@houseelevationdesign"><FaYoutube className="cursor-pointer hover:text-[#ff4a2a]" /></a>
            <a href="https://linkedin.com/in/Kadambangroup"><FaLinkedin className="cursor-pointer hover:text-[#ff4a2a]" /></a>  

            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-2 relative pb-2 after:content-[''] after:block after:w-8 after:h-[2px] after:bg-[#a32d57] after:mt-1">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-[#ff4a2a] duration-200">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/" className="hover:text-[#ff4a2a] duration-200">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#ff4a2a] duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <h3 className="text-lg font-semibold mb-2 relative pb-2 after:content-[''] after:block after:w-8 after:h-[2px] after:bg-[#a32d57] after:mt-1">
              Get Help
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="hover:text-[#ff4a2a] duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/returns-policy" className="hover:text-[#ff4a2a] duration-200">
                  Online Shopping
                </Link>
              </li>

            </ul>
          </div>

          {/* Online Shop */}
          <div>
            <h3 className="text-lg font-semibold mb-2 relative pb-2 after:content-[''] after:block after:w-8 after:h-[2px] after:bg-[#a32d57] after:mt-1">
              Online Shop
            </h3>
            <ul className="space-y-2 text-sm">

              <li>
                <Link to="/how-it-works" className="hover:text-[#ff4a2a] duration-200">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#ff4a2a] duration-200">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-2 relative pb-2 after:content-[''] after:block after:w-8 after:h-[2px] after:bg-[#a32d57] after:mt-1">
              Follow Us
            </h3>
            <p className="text-sm mb-2">Call us</p>
<a href="tel:+919043672462" className="text-sm font-medium mb-4 block hover:text-[#ff4a2a] transition">
    +91 90436 72462
</a>

<p className="text-sm mb-2">Email us</p>
<a href="mailto:kadambangroups@gmail.com" className="text-sm font-medium block hover:text-[#ff4a2a] transition">
    kadambangroups@gmail.com
</a>

          </div>
        </div>
      </div>
        <p className='text-center text-sm mt-5'>Copyrights © 2025 Kadamban Group | All Rights Reserved </p>
    </footer>
  );
};

export default Footer;
