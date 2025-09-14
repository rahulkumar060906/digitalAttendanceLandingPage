import React from 'react';

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: 'Speed',
      digital: 'Instant tap → 100+ students in 30 sec',
      biometric: 'Finger/face scan one by one → slow',
    },
    {
      feature: 'Setup Cost',
      digital: 'Minimal (software only)',
      biometric: 'High (hardware, maintenance)',
    },
    {
      feature: 'Scalability',
      digital: 'Works anywhere, anytime',
      biometric: 'Needs scanner in every class',
    },
    {
      feature: 'Flexibility',
      digital: 'Mobile/laptop friendly',
      biometric: 'Only physical presence',
    },
    {
      feature: 'Proxy Prevention',
      digital: 'Time-bound + geo-validation',
      biometric: 'Strong (unique biometrics)',
    },
    {
      feature: 'Privacy',
      digital: 'No sensitive data stored',
      biometric: 'Biometric data risk',
    },
    {
      feature: 'Eco-Friendly',
      digital: '100% digital',
      biometric: 'Hardware footprint',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Comparison: Digital Card vs Biometrics
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-blue-500/30">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="py-4 px-6 text-left">Feature</th>
                <th className="py-4 px-6 text-left">Digital Attendance Card</th>
                <th className="py-4 px-6 text-left">Biometric System</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}>
                  <td className="py-4 px-6 font-medium text-gray-300">{row.feature}</td>
                  <td className="py-4 px-6 text-blue-400">{row.digital}</td>
                  <td className="py-4 px-6 text-gray-400">{row.biometric}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-10 bg-gray-800 p-6 rounded-lg shadow-md border border-blue-500/30 blue-glow">
          <h3 className="text-xl font-bold mb-4 text-blue-300">Takeaway:</h3>
          <p className="text-lg text-gray-300">
            <span className="text-blue-400">👉</span> Digital Cards = fast, affordable, flexible.<br />
            Biometrics = secure but costly & complex.<br />
            Our system finds the balance — <strong className="text-blue-400">fair + future-ready</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;