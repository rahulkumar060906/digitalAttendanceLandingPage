import React from 'react';
import { FaEnvelope, FaPhone, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900/90 to-blue-950/90 backdrop-blur-md text-white py-12 px-4 md:pl-[180px] border-t border-blue-500/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300">Digital Attendance</h3>
            <p className="text-gray-400 mb-4">Transforming attendance systems for educational institutions.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110 hover-scale blue-glow">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110 hover-scale blue-glow">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110 hover-scale blue-glow">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110 hover-scale blue-glow">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-300 transition-all glass-hover px-2 py-1 rounded">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-blue-300 transition-all glass-hover px-2 py-1 rounded">Features</a></li>
              <li><a href="#comparison" className="text-gray-400 hover:text-blue-300 transition-all glass-hover px-2 py-1 rounded">Comparison</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-blue-300 transition-all glass-hover px-2 py-1 rounded">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-300 transition-all glass-hover px-2 py-1 rounded">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-300 transition-all glass-hover px-2 py-1 rounded">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-300 transition-all glass-hover px-2 py-1 rounded">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-300 transition-all glass-hover px-2 py-1 rounded">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
                <a href="mailto:info@qrattendance.com" className="text-gray-400 hover:text-blue-300 transition-all">info@qrattendance.com</a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-blue-400" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-blue-300 transition-all">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-800/30 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} QR Attendance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;