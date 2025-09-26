import React from 'react';
// Navbar Component


const navLinks = [
  { name: 'Home', path: 'hero' },
  { name: 'Solution', path: 'turning-point' },
  { name: 'Promise', path: 'promise' },
  { name: 'Features', path: 'experience' },
  { name: 'Compare', path: 'comparison' },
  { name: 'Testimonials', path: 'testimonials' },
  { name: 'Vision', path: 'bigger-picture' },
  { name: 'Get Started', path: 'cta' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('hero');

  const handlePageChange = (path) => {
    setCurrentPage(path);
    const el = document.getElementById(path);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-100 via-white to-cyan-100 shadow-lg border-b border-blue-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 drop-shadow-lg" />
          <span className="font-extrabold text-2xl tracking-wide text-blue-900 bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 text-transparent">Attendify</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            link.name !== 'Get Started' ? (
              <a
                key={link.name}
                href={`#${link.path}`}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(link.path);
                }}
                className={`font-semibold relative transition-all duration-300 hover:text-cyan-600 hover:-translate-y-1 px-3 py-1 rounded-md
                  ${currentPage === link.path ? 'text-blue-900 bg-blue-200' : 'text-gray-800'}`}
              >
                {link.name}
                {currentPage === link.path && (
                  <span className="absolute left-0 bottom-[-5px] w-full h-0.5 bg-cyan-500 rounded-full transition-all duration-300"></span>
                )}
              </a>
            ) : (
              <a
                key={link.name}
                href={`#${link.path}`}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(link.path);
                }}
                className="ml-4 px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-all border-2 border-blue-300"
              >
                {link.name}
              </a>
            )
          ))}
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 focus:outline-none">
            <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-16 left-0 right-0 bg-gradient-to-r from-blue-100 via-white to-cyan-100 shadow-lg border-b border-blue-200 transform transition-all duration-300 ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} origin-top`}>
          <div className="flex flex-col items-center py-4">
            {navLinks.map((link) => (
              link.name !== 'Get Started' ? (
                <a
                  key={link.name}
                  href={`#${link.path}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(link.path);
                  }}
                  className={`py-2 text-lg font-semibold w-full text-center transition-all duration-300 hover:text-cyan-600 hover:-translate-y-1 rounded-md
                    ${currentPage === link.path ? 'text-blue-900 bg-blue-200' : 'text-gray-800'}`}
                >
                  {link.name}
                </a>
              ) : (
                <a
                  key={link.name}
                  href={`#${link.path}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(link.path);
                  }}
                  className="mt-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-all border-2 border-blue-300"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;