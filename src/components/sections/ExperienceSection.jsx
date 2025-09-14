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
    <section className="py-16 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          <span className="text-blue-400">👉</span> Simple. Fast. Secure.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl hover:shadow-blue-500/20 border border-blue-500/30 hover:scale-105 transition-all blue-glow">
              <div className="flex items-center gap-4">
                <div className="text-2xl">{feature.icon}</div>
                <div>
                  <p className="text-lg font-medium text-gray-300">
                    {feature.text} {feature.highlight && <span className="text-blue-400">✅</span>} {feature.emoji && <span>{feature.emoji}</span>}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-400 mt-10 italic">
          This is not just an app — it's a smarter classroom experience.
        </p>
      </div>
    </section>
  );
};

export default ExperienceSection;