import React from 'react';

const BiggerPictureSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-900 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              <span className="text-blue-400">👉</span> Attendance system se zyada, ek movement hai.
            </h2>
            
            <div className="text-lg text-gray-300 space-y-4">
              <p>Socho, kitne ghante waste hote hain sirf attendance ke chakkar me.</p>
              <p>Socho, kitni baar fairness compromise hoti hai.</p>
              <p>This system gives back <strong className="text-blue-400">time, fairness, and respect</strong> — the asli need of education.</p>
            </div>
          </div>
          
          <div className="md:w-1/2" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-blue-500/30 blue-glow">
              <div className="relative">
                <div className="absolute -top-4 -left-4 bg-blue-900/50 p-4 rounded-full border border-blue-400/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <img 
                  src="/placeholder-bigger-picture.svg" 
                  alt="Education Transformation" 
                  className="w-full h-auto rounded-lg"
                />
                
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="bg-gray-700 p-4 rounded-lg text-center border border-blue-500/20 hover:scale-105 transition-all">
                    <h3 className="font-bold text-blue-300 text-xl mb-1">Time</h3>
                    <p className="text-sm text-gray-300">Saved for learning</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg text-center border border-blue-500/20 hover:scale-105 transition-all">
                    <h3 className="font-bold text-blue-300 text-xl mb-1">Fairness</h3>
                    <p className="text-sm text-gray-300">For all students</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg text-center border border-blue-500/20 hover:scale-105 transition-all">
                    <h3 className="font-bold text-blue-300 text-xl mb-1">Respect</h3>
                    <p className="text-sm text-gray-300">For everyone's time</p>
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