import React, { useState } from 'react';
import useAOS from '../../hooks/useAOS';

// --- Step Component for Reusability ---
const AttendanceStep = ({ number, text, isActive, isComplete }) => {
  const baseClasses = "flex items-center gap-4 p-4 rounded-xl font-semibold transition-all duration-300 shadow-md";
  let stepClasses = baseClasses;
  let iconContent = number === 1 ? (
    <span role="img" aria-label="tap" className="text-2xl">👆</span>
  ) : number === 2 ? (
    <span role="img" aria-label="verify" className="text-2xl">🔍</span>
  ) : (
    <span role="img" aria-label="done" className="text-2xl">✅</span>
  );
  let iconClasses = "w-10 h-10 rounded-full flex items-center justify-center text-white text-2xl";

  if (isComplete) {
    stepClasses += " bg-green-100 text-green-800 border-2 border-green-500 animate-pulse";
    iconClasses += " bg-green-600";
  } else if (isActive) {
    stepClasses += " bg-blue-200 text-blue-700 border-2 border-blue-500 animate-bounce";
    iconClasses += " bg-blue-600";
  } else {
    stepClasses += " bg-blue-50 text-gray-500 border-2 border-transparent";
    iconClasses += " bg-blue-400";
  }

  return (
    <div className={stepClasses}>
      <div className={iconClasses}>{iconContent}</div>
      <span className="text-lg font-semibold">{text}</span>
    </div>
  );
};

// --- Main Attendance Card Component ---
const AttendanceCard = () => {
  const [step, setStep] = useState(0); // 0: Idle, 1: Tap, 2: Verify, 3: Done
  const [statusMessage, setStatusMessage] = useState('Tap the button to record your attendance.');

  const handleMarkAttendance = () => {
    if (step === 3) return; // Already done

    // 1. Start: Tap
    setStep(1);
    setStatusMessage('Step 1 complete: Initiating verification...');

    // 2. Simulate Verification (Step 2)
    setTimeout(() => {
      setStep(2);
      setStatusMessage('Step 2 complete: Verifying device and location...');
    }, 1500);

    // 3. Simulate Completion (Step 3)
    setTimeout(() => {
      setStep(3);
      setStatusMessage('Attendance successfully marked! Have a great class. 🎉');
    }, 3000);
  };

  const buttonText = step === 3 ? 'Attendance Marked' : 'Mark Attendance';
  const buttonClasses = `px-8 py-3 text-lg font-bold rounded-lg transition-all duration-200 focus:outline-none focus:ring-4 ${step === 3
    ? 'bg-gray-400 cursor-not-allowed'
    : 'bg-green-600 hover:bg-green-700 text-white shadow-lg focus:ring-green-300'
    }`;

  useAOS();
  return (
    <div className="min-h-screen w-full flex justify-center items-center p-0 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto max-w-6xl bg-white p-4 sm:p-8 rounded-2xl shadow-xl border-2 border-blue-200 my-6 relative overflow-hidden" data-aos="fade-up">
        {/* Animated Illustration */}
        <div className="absolute right-8 top-8 hidden lg:block animate-float z-0">
          <span style={{ fontSize: '5rem' }} aria-label="Graduation">🎓</span>
        </div>
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-700 mb-6 sm:mb-8 text-center">
          💡 Imagine if attendance was just <span className="text-blue-500">one tap away</span>?
        </h1>
        {/* Motivational Quote */}
        <div className="mb-6 text-center">
          <blockquote className="italic text-lg text-gray-500">“Digital attendance saves up to <span className='text-green-600 font-bold'>10 minutes</span> per class!”</blockquote>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 z-10">
          {/* Left: Step Process */}
          <div className="flex flex-col gap-4 lg:w-1/3">
            <AttendanceStep number={1} text="Tap" isActive={step === 0} isComplete={step >= 1} />
            <AttendanceStep number={2} text="Verify" isActive={step === 1} isComplete={step >= 2} />
            <AttendanceStep number={3} text="Done" isActive={step === 2} isComplete={step === 3} />
          </div>
          {/* Right: Content & Action */}
          <div className="lg:w-2/3 flex flex-col justify-center">
            <p className="text-lg text-gray-700 mb-6">
              Every student gets a <span className="font-bold text-blue-600">Digital Attendance Card</span> on their device. As soon as the class starts, the student taps the <strong className="text-blue-600">'Mark Attendance'</strong> button—and attendance is instantly recorded.
            </p>
            {/* Action Button */}
            <button
              aria-label="Mark Attendance"
              onClick={handleMarkAttendance}
              disabled={step === 3}
              className={buttonClasses}
            >
              {buttonText}
            </button>
            {/* Status Message */}
            <p className={`mt-4 text-md italic ${step === 3 ? 'text-green-600 font-bold' : 'text-gray-500'}`} id="statusMessage">
              {statusMessage}
            </p>
            {/* Benefits */}
            <div className="mt-8 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-xl p-4 flex flex-col items-center shadow-sm">
                <span className="text-3xl mb-2">⏱️</span>
                <span className="text-green-700 font-bold">No roll calls</span>
                <span className="text-green-600 text-sm">Save time every class</span>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 flex flex-col items-center shadow-sm">
                <span className="text-3xl mb-2">⚡</span>
                <span className="text-blue-700 font-bold">No wasted time</span>
                <span className="text-blue-600 text-sm">Instant record keeping</span>
              </div>
              <div className="bg-yellow-50 rounded-xl p-4 flex flex-col items-center shadow-sm">
                <span className="text-3xl mb-2">🛡️</span>
                <span className="text-yellow-700 font-bold">No fake proxies</span>
                <span className="text-yellow-600 text-sm">Secure & reliable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Soft shadow for depth */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ boxShadow: '0 0 120px 40px #a7f3d0, 0 0 80px 20px #bfdbfe' }}></div>
    </div>
  );
};

export default AttendanceCard;