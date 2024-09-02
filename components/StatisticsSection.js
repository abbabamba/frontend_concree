import React from 'react';

const StatisticsSection = () => {
  return (
    <section className="grid grid-cols-3 gap-4 mb-8">
      <div className="bg-green-100 p-4 rounded">
        <h3 className="text-2xl font-bold text-green-700">+45</h3>
        <p>Offres d&apos;accompagnement</p>
      </div>
      <div className="bg-blue-100 p-4 rounded">
        <h3 className="text-2xl font-bold text-blue-700">+2500</h3>
        <p>Entrepreneurs accompagn&eacute;s</p>
      </div>
      <div className="bg-purple-100 p-4 rounded">
        <h3 className="text-2xl font-bold text-purple-700">+1532</h3>
        <p>Entreprises enregistr&eacute;es</p>
      </div>
    </section>
  );
};

export default StatisticsSection;
