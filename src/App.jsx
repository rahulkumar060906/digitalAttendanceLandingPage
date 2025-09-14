import React from 'react'
import './App.css'
import './animations.css'

// Import common components
import Footer from './components/common/Footer'
import VerticalNav from './components/common/VerticalNav'

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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-950 to-black">
      {/* Background elements for modern look */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 blur-3xl"></div>
        <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-indigo-500/20 to-blue-400/20 blur-3xl"></div>
      </div>
      
      <VerticalNav />
      
      <main className="flex-grow md:pl-[180px]">
        <div id="hero"><HeroSection /></div>
        <div id="turning-point"><TurningPointSection /></div>
        <div id="promise"><PromiseSection /></div>
        <div id="experience"><ExperienceSection /></div>
        <div id="comparison"><ComparisonSection /></div>
        <div id="testimonials"><TestimonialsSection /></div>
        <div id="bigger-picture"><BiggerPictureSection /></div>
        <div id="cta"><CallToActionSection /></div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
