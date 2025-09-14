import React from 'react';

const TurningPointSection = () => {
  return (
    <section className="py-16 px-4 text-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1" data-aos="fade-right">
            <div className="relative">
              <div className="bg-gray-800/60 backdrop-blur-md p-6 rounded-xl shadow-[0_8px_32px_0_rgba(59,130,246,0.2)] border border-blue-500/30">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 p-4 bg-blue-900/50 backdrop-blur-sm rounded-lg border border-blue-500/30 hover-scale blue-glow">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-3 rounded-full shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-blue-300">Tap</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-blue-900/40 backdrop-blur-sm rounded-lg border border-blue-500/30 hover-scale blue-glow">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-3 rounded-full shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-blue-300">Verify</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-blue-900/30 backdrop-blur-sm rounded-lg border border-blue-500/30 hover-scale blue-glow">
                    <div className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white p-3 rounded-full shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-blue-300">Done</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              <span className="text-blue-400">👉</span> Socho, agar attendance sirf ek tap me ho jaye toh?
            </h2>
            
            <div className="text-lg text-gray-300 space-y-4">
              <p>Har student ko milta hai ek <strong className="text-blue-400">Digital Attendance Card</strong> unke device par.</p>
              <p>Class shuru hote hi student bas <strong className="text-blue-400">'Mark Attendance'</strong> button tap karega — attendance instantly record ho jaayegi.</p>
              
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>No roll calls.</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>No wasted time.</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>No fake proxies.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TurningPointSection;