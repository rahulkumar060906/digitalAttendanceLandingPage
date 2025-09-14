import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 px-4 md:py-18 text-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="md:w-1/2 fade-in" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 animated-gradient-text">
              <span className="text-blue-400">👉</span> Class ka time padhai ke liye hona chahiye, attendance ke liye nahi.
            </h1>
            
            <div className="mb-8 text-lg text-gray-300">
              <p className="mb-3">Har lecture ki shuruaat me minutes waste ho jaate hain. Kabhi roll call, kabhi register.</p>
              <p className="mb-3">Badi classes me toh queue lag jaati hai. Students bore ho jaate hain, aur learning peeche reh jaati hai.</p>
              <p className="mb-3">Proxy attendance bhi ek problem hai. System purana lagta hai.</p>
            </div>
            
            <p className="text-xl font-medium mb-8 text-blue-400">Attendance ka process simple hona chahiye — bas show up and mark.</p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-all shadow-lg hover-scale blue-glow">
                Join the Change <FaArrowRight />
              </button>
              <button className="bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/60 border border-blue-500/30 text-blue-400 py-3 px-6 rounded-lg flex items-center gap-2 transition-all shadow-md hover-scale blue-glow">
                See How It Works
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 slide-up" data-aos="fade-left" data-aos-delay="200">
            <div className="bg-gray-800/40 backdrop-blur-md p-8 rounded-2xl shadow-[0_8px_32px_0_rgba(59,130,246,0.25)] border border-blue-500/30">
              <img 
                src="/placeholder-attendance-problem.svg" 
                alt="Attendance Problem Illustration" 
                className="w-full h-auto drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;