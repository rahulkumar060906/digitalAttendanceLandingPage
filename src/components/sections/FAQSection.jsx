import React, { useState } from 'react';

const faqs = [
    {
        question: "How does digital attendance work?",
        answer: "Students click on button to mark their attendance, which is instantly recorded in the system."
    },
    {
        question: "Is my data secure?",
        answer: "Yes, all attendance data is encrypted and securely stored. Only authorized personnel can access it."
    },
    {
        question: "Can faculty track attendance in real time?",
        answer: "Absolutely! Faculty can view real-time attendance dashboards and generate reports easily."
    },
    {
        question: "Is this system eco-friendly?",
        answer: "Yes, it eliminates paper-based processes, reducing waste and supporting sustainability."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);
    return (
        <section className="py-10 px-2 sm:px-4 bg-white text-blue-900">
            <div className="container mx-auto max-w-3xl bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-4 sm:p-8 rounded-2xl shadow-xl border-2 border-blue-200 my-6" data-aos="fade-up">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-500">Frequently Asked Questions</h2>
                <ul className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <li key={idx} className={`bg-white rounded-xl border shadow-sm p-2 sm:p-4 transition-all duration-300 ${openIndex === idx ? 'border-cyan-400 shadow-lg' : 'border-blue-100'}`}>
                            <button
                                className={`w-full text-left font-semibold flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 ${openIndex === idx ? 'text-blue-700' : 'text-blue-900'} bg-white border border-blue-200 rounded-lg px-3 sm:px-4 py-3 shadow hover:bg-blue-50 active:bg-blue-100`}
                                aria-expanded={openIndex === idx}
                                aria-controls={`faq-answer-${idx}`}
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                onKeyDown={e => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setOpenIndex(openIndex === idx ? null : idx);
                                    }
                                }}
                                tabIndex={0}
                                style={{ minHeight: '48px' }}
                            >
                                <span>{faq.question}</span>
                                <svg
                                    className={`ml-2 w-5 h-5 transition-transform duration-300 ${openIndex === idx ? 'rotate-90 text-cyan-500 animate-bounce' : 'rotate-0 text-blue-300'}`}
                                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            <div
                                id={`faq-answer-${idx}`}
                                className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}
                                aria-hidden={openIndex !== idx}
                            >
                                <div className={`text-blue-700 px-1 sm:px-2 py-2 transition-opacity duration-500 ${openIndex === idx ? 'opacity-100 animate-fadeIn' : 'opacity-0'}`}>
                                    {faq.answer}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
