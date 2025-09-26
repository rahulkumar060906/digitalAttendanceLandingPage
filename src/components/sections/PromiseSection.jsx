import React from 'react';
import useAOS from '../../hooks/useAOS';

const PromiseSection = () => {
  useAOS();
  return (
    <section className="py-10 px-2 sm:px-4 text-blue-900 bg-blue-50">
      <div className="container mx-auto max-w-6xl bg-white p-4 sm:p-8 rounded-2xl shadow-xl border-2 border-blue-200 my-6" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-cyan-500">
          <span className="text-blue-700 text-4xl">🤝</span> This is not just attendance, it's a fair and fast system.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8" data-aos="fade-up" data-aos-delay="100">
          <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl border-2 border-blue-100 hover:scale-105 transition-all flex flex-col items-center">
            <span className="text-5xl mb-4" aria-label="Faculty">👨‍🏫</span>
            <h3 className="text-xl font-bold mb-3 text-blue-800">For Faculty</h3>
            <p className="text-blue-900 text-center">Freedom from registers and manual checking.</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl border-2 border-blue-100 hover:scale-105 transition-all flex flex-col items-center">
            <span className="text-5xl mb-4" aria-label="Student">🧑‍🎓</span>
            <h3 className="text-xl font-bold mb-3 text-blue-800">For Students</h3>
            <p className="text-blue-900 text-center">Assurance that your presence truly matters.</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl border-2 border-blue-100 hover:scale-105 transition-all flex flex-col items-center">
            <span className="text-5xl mb-4" aria-label="Institution">🏢</span>
            <h3 className="text-xl font-bold mb-3 text-blue-800">For Institutions</h3>
            <p className="text-blue-900 text-center">Eco-friendly, modern, and future-ready solution.</p>
          </div>
        </div>
        {/* Soft shadow for depth */}
        <div className="absolute inset-0 pointer-events-none z-0" style={{ boxShadow: '0 0 120px 40px #a7f3d0, 0 0 80px 20px #bfdbfe' }}></div>
      </div>
    </section>
  );
};

export default PromiseSection;