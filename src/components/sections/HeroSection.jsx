import React, { Suspense, useRef, useMemo, useState } from "react";
import useAOS from '../../hooks/useAOS';

export default function HeroSection(props) {
  useAOS();
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-blue-50 via-white to-cyan-100 text-gray-900 overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute top-0 left-0 w-2/3 sm:w-1/2 h-1/2 bg-gradient-to-br from-blue-300 to-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse" style={{ zIndex: 0 }}></div>
      <div className="absolute bottom-0 right-0 w-1/2 sm:w-1/3 h-1/3 bg-gradient-to-br from-cyan-300 to-blue-200 rounded-full blur-2xl opacity-20 animate-pulse" style={{ zIndex: 0 }}></div>
      {/* Left Content */}
      <div className="w-full max-w-xl space-y-6 text-center md:text-left md:mr-12 z-10" data-aos="fade-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Futuristic <span className="text-blue-500">Attendance</span> System
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-blue-700 font-semibold">Welcome to the next generation of attendance — secure, fast, and fair for everyone.</p>
        <p className="text-base sm:text-lg md:text-xl text-gray-700">
          Say goodbye to proxies and paper registers. Experience digital card-based attendance like never before.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-2xl font-bold shadow-xl flex items-center justify-center gap-3 text-lg sm:text-xl transition-all animate-bounce">
            🚀 Get Started
          </button>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-300 rounded-2xl bg-white hover:bg-blue-50 text-blue-700 font-bold shadow-md transition-all text-lg sm:text-xl">
            Learn More
          </button>
        </div>
      </div>
      {/* Right: Hero Image with shadow and rounded corners */}
      <div className="w-full md:w-[420px] h-[260px] sm:h-[320px] md:h-[420px] flex items-center justify-center mt-12 md:mt-0 z-10" data-aos="zoom-in">
        <div className="bg-white rounded-2xl shadow-2xl p-2 sm:p-4 border-2 border-blue-100 w-full h-full flex items-center justify-center">
          <img
            src="/hero-image.png"
            alt="Hero"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

