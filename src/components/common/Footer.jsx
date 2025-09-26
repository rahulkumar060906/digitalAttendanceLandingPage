import React from 'react';
import { FaEnvelope, FaPhone, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-blue-100 pt-0 pb-8 px-0 relative">
      {/* Wavy SVG Top Border */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 block">
          <path d="M0,0V46.29c47.29,22,104.29,35.71,166,35.71,120,0,197-44.29,286-44.29,94,0,172,44.29,286,44.29,80,0,142-27.71,206-44.29,66.67-17.14,138.67-22.86,256-22.86V0Z" fill="#2563eb" opacity=".3"></path>
        </svg>
      </div>
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-10">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-extrabold mb-2 text-white tracking-wide">Digital Card Attendance</h3>
            <p className="text-blue-200 mb-4 text-lg">Empowering campuses to save time, boost fairness, and respect every presence.</p>
            <div className="flex space-x-6 justify-center md:justify-start mt-6">
              <a href="#" className="text-cyan-400 hover:text-white transition-all transform hover:scale-125 animate-pulse" aria-label="Twitter">
                <FaTwitter size={32} />
              </a>
              <a href="#" className="text-cyan-400 hover:text-white transition-all transform hover:scale-125 animate-pulse delay-100" aria-label="Facebook">
                <FaFacebook size={32} />
              </a>
              <a href="#" className="text-cyan-400 hover:text-white transition-all transform hover:scale-125 animate-pulse delay-200" aria-label="Instagram">
                <FaInstagram size={32} />
              </a>
              <a href="#" className="text-cyan-400 hover:text-white transition-all transform hover:scale-125 animate-pulse delay-300" aria-label="LinkedIn">
                <FaLinkedin size={32} />
              </a>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 text-cyan-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-cyan-300 transition-all px-2 py-1 rounded">Home</a></li>
              <li><a href="#features" className="text-blue-100 hover:text-cyan-300 transition-all px-2 py-1 rounded">Features</a></li>
              <li><a href="#comparison" className="text-blue-100 hover:text-cyan-300 transition-all px-2 py-1 rounded">Comparison</a></li>
              <li><a href="#testimonials" className="text-blue-100 hover:text-cyan-300 transition-all px-2 py-1 rounded">Testimonials</a></li>
            </ul>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 text-cyan-300">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-cyan-300 transition-all px-2 py-1 rounded">Documentation</a></li>
              <li><a href="#" className="text-blue-100 hover:text-cyan-300 transition-all px-2 py-1 rounded">API</a></li>
              <li><a href="#" className="text-blue-100 hover:text-cyan-300 transition-all px-2 py-1 rounded">Privacy Policy</a></li>
              <li><a href="#" className="text-blue-100 hover:text-cyan-300 transition-all px-2 py-1 rounded">Terms of Service</a></li>
            </ul>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 text-cyan-300">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaEnvelope className="text-cyan-400" />
                <a href="mailto:info@qrattendance.com" className="text-blue-100 hover:text-cyan-300 transition-all">info@qrattendance.com</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaPhone className="text-cyan-400 transform rotate-90" />
                <a href="tel:+1234567890" className="text-blue-100 hover:text-cyan-300 transition-all">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-blue-800 text-center text-blue-300 text-sm">
          <p className="mb-2">“Attendance is not just a record, it's respect for every learner.”</p>
          <p>© {new Date().getFullYear()} QR Attendance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;