import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          La plateforme qui vous aide à développer votre <span className="text-green-500">entreprise</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Bienvenue sur Wekomkom, votre catalyseur de succès entrepreneurial. Trouvez les meilleures opportunités pour
          votre croissance et connectez-vous avec des mentors, des investisseurs et des entreprises partenaires.
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 flex items-center">
            Trouver une opportunité
            <ArrowRight className="ml-2" size={20} />
          </button>
          <button className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 font-semibold px-6 py-3 rounded-lg transition duration-300">
            Découvrir les offres
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <img src="/champ.png" alt="Offers" className="mr-4" />
            <div>
              <p className="text-3xl font-bold text-green-500">+45</p>
              <p className="text-gray-600">Offres d'accompagnement</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <img src="/reunio2.png" alt="Entrepreneurs" className="mr-4" />
            <div>
              <p className="text-3xl font-bold text-green-500">+2500</p>
              <p className="text-gray-600">Entrepreneurs, startups</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <img src="/entreprise.png" alt="Companies" className="mr-4" />
            <div>
              <p className="text-3xl font-bold text-green-500">+1532</p>
              <p className="text-gray-600">Entreprises impliquées</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;