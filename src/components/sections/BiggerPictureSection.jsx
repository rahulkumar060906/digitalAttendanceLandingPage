import React from 'react';
import useAOS from '../../hooks/useAOS';

const BiggerPictureSection = () => {
  useAOS();
  return (
    <section className="py-10 px-2 sm:px-4 bg-gradient-to-br from-blue-50 via-white to-green-50 md:py-20 border-b border-blue-200">
      <div className="container mx-auto max-w-6xl" data-aos="fade-up">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12" data-aos="fade-up" data-aos-delay="100">
          <div className="md:w-1/2" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-400">
              <span className="text-blue-700 text-4xl">🌍</span> More Than Just Attendance — It's a Movement
            </h2>
            <p className="text-lg text-blue-700 mb-6">Transforming education by giving back time, fairness, and respect.</p>
            <div className="text-lg text-blue-900 space-y-4">
              <p>Imagine how many hours are wasted just for attendance.</p>
              <p>Think about how often fairness is compromised.</p>
              <p>This system gives back <strong className="text-blue-700">time, fairness, and respect</strong> — the real need of education.</p>
            </div>
            <div className="mt-8 flex justify-start">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg transition-all text-lg">Join the Movement</button>
            </div>
          </div>

          <div className="md:w-1/2" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-gradient-to-br from-white via-blue-50 to-green-50 p-8 rounded-2xl shadow-xl border border-blue-200">
              <div className="relative">
                <img
                  src="/placeholder-bigger-picture.svg"
                  alt="Illustration showing education transformation and digital attendance"
                  className="w-full h-auto rounded-lg border border-blue-100"
                  loading="lazy"
                />
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="bg-blue-100 p-4 rounded-xl text-center border border-blue-300 hover:scale-105 transition-all flex flex-col items-center">
                    <span className="text-3xl mb-2">⏱️</span>
                    <h3 className="font-bold text-blue-800 text-xl mb-1">Time</h3>
                    <p className="text-sm text-blue-900">Saved for learning</p>
                  </div>
                  <div className="bg-green-100 p-4 rounded-xl text-center border border-green-300 hover:scale-105 transition-all flex flex-col items-center">
                    <span className="text-3xl mb-2">⚖️</span>
                    <h3 className="font-bold text-green-800 text-xl mb-1">Fairness</h3>
                    <p className="text-sm text-green-900">For all students</p>
                  </div>
                  <div className="bg-yellow-100 p-4 rounded-xl text-center border border-yellow-300 hover:scale-105 transition-all flex flex-col items-center">
                    <span className="text-3xl mb-2">🤝</span>
                    <h3 className="font-bold text-yellow-800 text-xl mb-1">Respect</h3>
                    <p className="text-sm text-yellow-900">For everyone's time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiggerPictureSection;