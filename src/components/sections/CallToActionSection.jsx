import React from 'react';
import { FaRocket } from 'react-icons/fa';

const CallToActionSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            <span className="text-blue-400">👉</span> Ab decision aapka hai.
          </h2>
          
          <div className="text-xl max-w-3xl mb-10" data-aos="fade-up" data-aos-delay="100">
            <p className="mb-4">Ya toh wahi purana process…</p>
            <p>Ya ek naya system jo speed, fairness aur simplicity lekar aata hai.</p>
          </div>
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg flex items-center gap-3 text-xl transition-all shadow-lg border border-blue-400/30 hover:shadow-blue-500/20" data-aos="zoom-in" data-aos-delay="200">
            <FaRocket />
            Transform My Campus
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;