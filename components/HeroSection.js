import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          La plateforme qui vous aide à développer votre <span className="text-blue-600">entreprise</span>
        </h1>
        <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Bienvenue sur Wekomkom, votre catalyseur de succès entrepreneurial. Trouvez les meilleures opportunités pour
          votre croissance et connectez-vous avec des mentors, des investisseurs et des entreprises partenaires.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <Link href="/opportunities">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
              Trouver une opportunité
              <ArrowRight className="ml-2" size={20} />
            </button>
          </Link>
          <button className="bg-white hover:bg-gray-100 text-blue-600 border-2 border-blue-600 font-semibold px-8 py-4 rounded-full transition duration-300 shadow-md hover:shadow-lg">
            Découvrir les offres
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "/champ.png", number: "+45", text: "Offres d'accompagnement" },
            { icon: "/reunio2.png", number: "+2500", text: "Entrepreneurs, startups" },
            { icon: "/entreprise.png", number: "+1532", text: "Entreprises impliquées" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center">
                <Image src={item.icon} alt={item.text} width={80} height={80} className="mb-4" />
                <p className="text-4xl font-bold text-blue-600 mb-2">{item.number}</p>
                <p className="text-gray-700 text-center">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;