import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const VerticalNav = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Sections to navigate to
  const sections = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'turning-point', label: 'Solution', icon: '💡' },
    { id: 'promise', label: 'Promise', icon: '✅' },
    { id: 'experience', label: 'Features', icon: '⭐' },
    { id: 'comparison', label: 'Compare', icon: '📊' },
    { id: 'testimonials', label: 'Testimonials', icon: '💬' },
    { id: 'bigger-picture', label: 'Vision', icon: '🖼️' },
    { id: 'cta', label: 'Get Started', icon: '🚀' },
  ];

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Get all section elements
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      })).filter(section => section.element);
      
      // Find the current active section
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        const { top } = element.getBoundingClientRect();
        
        if (top <= 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section when nav item is clicked
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for any fixed headers
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={toggleNav} 
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-800/80 backdrop-blur-md p-2 rounded-full shadow-md border border-blue-500/20 hover-scale blue-glow"
        aria-label="Toggle navigation"
      >
        {isNavOpen ? <FaTimes size={24} className="text-blue-400" /> : <FaBars size={24} className="text-blue-400" />}
      </button>

      {/* Background Overlay */}
      {isNavOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleNav}
          aria-hidden="true"
        />
      )}

      {/* Vertical Navigation */}
      <nav className={`fixed left-0 top-0 h-full z-40 transition-transform duration-300 ${isNavOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <ul className="flex flex-col gap-2 bg-gray-900/30 backdrop-blur-lg p-3 rounded-r-lg max-w-[180px] h-full pt-16 md:pt-8 justify-center border-r border-blue-500/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-cyan-500/10 rounded-r-lg -z-10"></div>
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all w-full hover-scale ${activeSection === section.id ? 'bg-blue-900/50 backdrop-blur-md text-blue-300 shadow-md border-l-2 border-blue-400' : 'bg-gray-800/40 backdrop-blur-sm text-gray-300 hover:bg-gray-800/60 border border-blue-500/20'}`}
              aria-label={`Navigate to ${section.label} section`}
            >
              <span className="text-xl">{section.icon}</span>
              <span className="font-medium">{section.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
    </>
  );
};

export default VerticalNav;