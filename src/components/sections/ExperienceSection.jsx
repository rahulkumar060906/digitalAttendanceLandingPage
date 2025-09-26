import React from 'react';
import { FaCheck, FaClock, FaMapMarkerAlt, FaChartBar, FaUsers, FaFileExport, FaGlobe } from 'react-icons/fa';

const ExperienceSection = () => {
  const features = [
    { icon: <FaCheck className="text-blue-400" />, text: 'One-tap attendance', highlight: true },
    { icon: <FaClock className="text-blue-400" />, text: 'Time-bound & location-verified', emoji: '⏱️📍' },
    { icon: <FaChartBar className="text-blue-400" />, text: 'Dashboards & analytics', emoji: '📊' },
    { icon: <FaUsers className="text-blue-400" />, text: 'Role-based access', emoji: '👥' },
    { icon: <FaFileExport className="text-blue-400" />, text: 'Reports & exports', emoji: '📤' },
    { icon: <FaGlobe className="text-blue-400" />, text: 'Cross-device support', emoji: '🌍' },
  ];

  return (
    <section className="py-16 px-4 bg-blue-50 border-b border-blue-200">
      <div className="container mx-auto max-w-6xl bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-200">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-cyan-500">
          <span className="text-blue-700">⭐</span> Experience the Difference
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-100 p-8 rounded-xl shadow hover:shadow-lg border-2 border-blue-200 hover:scale-105 transition-all">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Fast Attendance</h3>
            <p className="text-blue-900">Attendance in seconds, not minutes.</p>
          </div>
          <div className="bg-blue-100 p-8 rounded-xl shadow hover:shadow-lg border-2 border-blue-200 hover:scale-105 transition-all">
            <h3 className="text-xl font-bold mb-3 text-blue-800">Proxy Proof</h3>
            <p className="text-blue-900">Unique QR for every class, every time.</p>
          </div>
          <div className="bg-blue-100 p-8 rounded-xl shadow hover:shadow-lg border-2 border-blue-200 hover:scale-105 transition-all">
            <h3 className="text-xl font-bold mb-3 text-blue-800">No Hardware</h3>
            <p className="text-blue-900">Works with any smartphone, no extra cost.</p>
          </div>
        </div>
        <p className="text-center text-blue-700 mt-10 italic">
          This is not just an app — it's a smarter classroom experience.
        </p>
      </div>
    </section>
  );
};

export default ExperienceSection;