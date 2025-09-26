import React from 'react'
import './App.css'
import './animations.css'

// Import common components
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import FAQSection from './components/sections/FAQSection';
import ContactFormSection from './components/sections/ContactFormSection';

// Import section components
import HeroSection from './components/sections/HeroSection'
import TurningPointSection from './components/sections/TurningPointSection'
import PromiseSection from './components/sections/PromiseSection'
import ExperienceSection from './components/sections/ExperienceSection'
import ComparisonSection from './components/sections/ComparisonSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import BiggerPictureSection from './components/sections/BiggerPictureSection'
import CallToActionSection from './components/sections/CallToActionSection'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <div id="hero"><HeroSection /></div>
        <div id="turning-point"><TurningPointSection /></div>
        <div id="promise"><PromiseSection /></div>
        <div id="experience"><ExperienceSection /></div>
        <div id="comparison"><ComparisonSection /></div>
        <div id="testimonials"><TestimonialsSection /></div>
        <div id="bigger-picture"><BiggerPictureSection /></div>
        <div id="cta"><CallToActionSection /></div>
        <FAQSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}

export default App
