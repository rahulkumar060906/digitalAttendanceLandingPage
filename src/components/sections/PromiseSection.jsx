import React from 'react';

const PromiseSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          <span className="text-blue-400">👉</span> Ye sirf attendance nahi, ek fair aur fast system hai.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-blue-500/20 border border-blue-500/30 hover:scale-105 transition-all blue-glow">
            <div className="bg-blue-900/50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-300">Faculty ke liye</h3>
            <p className="text-gray-300">Freedom from registers & manual checking.</p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-blue-500/20 border border-blue-500/30 hover:scale-105 transition-all blue-glow">
            <div className="bg-blue-900/50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-300">Students ke liye</h3>
            <p className="text-gray-300">Assurance that presence truly matters.</p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-blue-500/20 border border-blue-500/30 hover:scale-105 transition-all blue-glow">
            <div className="bg-blue-900/50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-300">Institutions ke liye</h3>
            <p className="text-gray-300">Eco-friendly, modern aur future-ready solution.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;