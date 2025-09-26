import React from 'react';
import { FaRocket } from 'react-icons/fa';

const CallToActionSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900 py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-6xl bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-200">
        <div className="flex flex-col items-center text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-cyan-500">
            <span className="text-blue-700 text-4xl">�</span> The Decision Is Yours
          </h2>
          <p className="text-lg text-blue-700 mb-6">Choose progress, speed, and fairness for your campus.</p>
          <div className="text-xl max-w-3xl mb-10" data-aos="fade-up" data-aos-delay="100">
            <p className="mb-4">Stick with the old process...</p>
            <p>Or embrace a new system that brings speed, fairness, and simplicity.</p>
          </div>
          <button className="bg-gradient-to-r from-blue-700 to-cyan-500 hover:from-blue-800 hover:to-cyan-600 text-white font-bold py-4 px-10 rounded-xl flex items-center gap-3 text-xl transition-all shadow-lg border-2 border-blue-400 hover:shadow-xl animate-bounce" data-aos="zoom-in" data-aos-delay="200">
            <FaRocket />
            Transform My Campus
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;