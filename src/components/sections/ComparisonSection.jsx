import React from 'react';
import useAOS from '../../hooks/useAOS';

const ComparisonSection = () => {
  useAOS();
  const comparisonData = [
    {
      feature: 'Speed',
      icon: '⚡',
      digital: 'Instant record attendance (seconds)',
      biometric: 'Finger/face scan one by one → slow',
    },
    {
      feature: 'Setup Cost',
      icon: '💸',
      digital: 'Minimal (software only)',
      biometric: 'Expensive hardware',
    },
    {
      feature: 'Flexibility',
      icon: '📱',
      digital: 'Mobile/laptop friendly',
      biometric: 'Only physical presence',
    },
    {
      feature: 'Proxy Prevention',
      icon: '🛡️',
      digital: 'Time-bound + geo-validation',
      biometric: 'Strong (unique biometrics)',
    },
    {
      feature: 'Privacy',
      icon: '🔒',
      digital: 'No sensitive data stored',
      biometric: 'Biometric data risk',
    },
    {
      feature: 'Eco-Friendly',
      icon: '🌱',
      digital: '100% digital',
      biometric: 'Hardware footprint',
    },
  ];

  return (
    <section className="py-10 px-2 sm:px-4 text-blue-900 bg-blue-50">
      <div className="container mx-auto max-w-6xl bg-white p-4 sm:p-8 rounded-2xl shadow-xl border-2 border-blue-200" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-cyan-500">
          <span className="text-blue-700">📊</span> Comparison
        </h2>
        <p className="text-lg text-center text-blue-700 mb-10">See how Digital Card Attendance stacks up against traditional biometric systems.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-blue-100 rounded-xl overflow-hidden shadow border-2 border-blue-200">
            <thead>
              <tr>
                <th className="py-4 px-6 text-left text-blue-800 font-bold text-lg">Feature</th>
                <th className="py-4 px-6 text-left text-blue-700 font-bold text-lg">Traditional</th>
                <th className="py-4 px-6 text-left text-blue-900 font-bold text-lg">Digital Card Attendance</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'} style={{ transition: 'background 0.2s' }}>
                  <td className="py-4 px-6 font-semibold text-blue-900 flex items-center gap-2">
                    <span className="text-2xl">{row.icon}</span> {row.feature}
                  </td>
                  <td className="py-4 px-6 text-blue-700">{row.biometric}</td>
                  <td className={`py-4 px-6 text-blue-800 font-bold ${row.feature === 'Speed' ? 'bg-green-100 rounded-lg' : ''}`}>{row.digital}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 bg-gradient-to-r from-blue-100 via-green-100 to-blue-100 p-6 rounded-xl shadow-md border border-blue-200 flex items-center gap-4">
          <span className="text-3xl">🚀</span>
          <div>
            <h3 className="text-xl font-bold mb-2 text-blue-800">Takeaway:</h3>
            <p className="text-lg text-blue-900">
              <span className="text-blue-700">👉</span> Digital Cards = fast, affordable, flexible.<br />
              Biometrics = secure but costly & complex.<br />
              Our system finds the balance — <strong className="text-blue-700">fair + future-ready</strong>.
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg transition-all text-lg">Get Started with Digital Attendance</button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;