import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          La plateforme qui vous aide à développer votre <span className="text-green-500">entreprise</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Bienvenue sur Wassidjan, votre catalyseur de succès entrepreneurial. Trouvez les meilleures opportunités pour
          votre croissance et connectez-vous avec des mentors, des investisseurs et des entreprises partenaires.
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <Link href="/opportunities">
            <a className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
              Trouver une opportunité
            </a>
          </Link>
          <Link href="/register">
            <a className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 font-semibold px-6 py-3 rounded-lg transition duration-300">
              Découvrir les offres
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <Image src="/champ.png" alt="Offers" width={100} height={100} className="mr-4" />
            <div>
              <p className="text-3xl font-bold text-green-500">+45</p>
              <p className="text-gray-600">Offres d&apos;accompagnement</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <Image src="/reunio2.png" alt="Entrepreneurs" width={100} height={100} className="mr-4" />
            <div>
              <p className="text-3xl font-bold text-green-500">+2500</p>
              <p className="text-gray-600">Entrepreneurs, startups</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <Image src="/entreprise.png" alt="Companies" width={100} height={100} className="mr-4" />
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
