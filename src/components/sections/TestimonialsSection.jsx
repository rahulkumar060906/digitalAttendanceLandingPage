import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Ab lagta hai main teacher hoon, clerk nahi.",
      role: "Faculty Member",
      avatar: "/placeholder-avatar-1.svg",
    },
    {
      quote: "Meri presence finally count karti hai.",
      role: "Student",
      avatar: "/placeholder-avatar-2.svg",
    },
    {
      quote: "Institute ab future-ready lagta hai.",
      role: "Principal",
      avatar: "/placeholder-avatar-3.svg",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300" data-aos="fade-up">
          <span className="text-blue-400">👩🏫</span> Voices That Matter
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 hover:shadow-blue-500/20 hover:scale-105 transition-all blue-glow" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-900/50 rounded-full mb-4 overflow-hidden border border-blue-400/50">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.role}
                    className="w-full h-full object-cover"
                  />
                </div>
                <blockquote className="text-xl font-medium mb-4 text-gray-300">"{testimonial.quote}"</blockquote>
                <p className="text-blue-300">– {testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;