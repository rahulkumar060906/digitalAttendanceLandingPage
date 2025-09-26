import React from 'react';
import useAOS from '../../hooks/useAOS';

const TestimonialsSection = () => {
  useAOS();
  const testimonials = [
    {
      quote: "Now I feel like a teacher, not a clerk.",
      role: "Faculty Member",
      avatar: "/placeholder-avatar-1.svg",
      emoji: "👨‍🏫"
    },
    {
      quote: "My presence finally counts!",
      role: "Student",
      avatar: "/placeholder-avatar-2.svg",
      emoji: "🧑‍🎓"
    },
    {
      quote: "Our institute feels future-ready now.",
      role: "Principal",
      avatar: "/placeholder-avatar-3.svg",
      emoji: "🏢"
    },
  ];

  return (
    <section className="py-10 px-2 sm:px-4 bg-blue-50 text-blue-900">
      <div className="container mx-auto max-w-6xl bg-white p-4 sm:p-8 rounded-2xl shadow-xl border-2 border-blue-200" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-cyan-500" data-aos="fade-up">
          <span className="text-blue-700">�</span> Voices That Matter
        </h2>
        <p className="text-lg text-center text-blue-700 mb-10">Real experiences from faculty, students, and leaders using Digital Card Attendance.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8" data-aos="fade-up" data-aos-delay="100">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-100 via-white to-green-100 p-6 rounded-xl border-2 border-blue-200 hover:shadow-xl hover:scale-105 transition-all flex flex-col items-center text-center animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="w-20 h-20 bg-blue-200 rounded-full mb-4 overflow-hidden border-2 border-blue-300 flex items-center justify-center text-3xl">
                <span>{testimonial.emoji}</span>
                <img
                  src={testimonial.avatar}
                  alt={`Avatar of ${testimonial.role}`}
                  className="w-12 h-12 object-cover rounded-full ml-2"
                  loading="lazy"
                />
              </div>
              <blockquote className="text-xl font-medium mb-4 text-blue-900">"{testimonial.quote}"</blockquote>
              <p className="text-blue-700 font-semibold">– {testimonial.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg transition-all text-lg">Share Your Experience</button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;