import React, { useState } from 'react';

export default function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Here you would send the form data to your backend or service
    };

    return (
        <section className="py-10 px-2 sm:px-4 bg-blue-50 text-blue-900">
            <div className="container mx-auto max-w-xl bg-white p-4 sm:p-8 rounded-2xl shadow-xl border-2 border-blue-200 my-6" data-aos="fade-up">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-cyan-500">Contact Us</h2>
                {submitted ? (
                    <div className="text-green-600 font-bold text-center py-8">Thank you for reaching out! We'll get back to you soon.</div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block font-semibold mb-2">Name</label>
                            <input type="text" name="name" id="name" required value={form.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-semibold mb-2">Email</label>
                            <input type="email" name="email" id="email" required value={form.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block font-semibold mb-2">Message</label>
                            <textarea name="message" id="message" required value={form.message} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300" rows={4}></textarea>
                        </div>
                        <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-all">Send Message</button>
                    </form>
                )}
            </div>
        </section>
    );
}
