import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-blue-100 p-8 rounded-lg mb-8 shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          La plateforme qui vous aide à développer votre <span className="text-blue-600">entreprise</span>
        </h1>
        <p className="text-lg text-gray-600">
          Découvrez des opportunités, entrez en contact avec des entreprises du Togo, ou inscrivez-vous pour être contacté avec des offres, des ressources et des opportunités.
        </p>
      </div>
      <div className="flex justify-center space-x-4 mb-8">
        <Link href="/register" legacyBehavior>
          <a className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
            Trouvez une opportunité
          </a>
        </Link>
        <Link href="/opportunities" legacyBehavior>
          <a className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 font-semibold px-6 py-3 rounded-lg transition duration-300">
            Découvrir les offres
          </a>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <Image src="/45.png" alt="Offers" width={40} height={40} className="mr-4" />
          <div>
            <p className="text-2xl font-bold text-blue-600">+45</p>
            <p className="text-sm text-gray-500">Offres d'accompagnement</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <Image src="/champ.png" alt="Entrepreneurs" width={40} height={40} className="mr-4" />
          <div>
            <p className="text-2xl font-bold text-blue-600">+2500</p>
            <p className="text-sm text-gray-500">Entrepreneurs, startups</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <Image src="/reunion.png" alt="Events" width={40} height={40} className="mr-4" />
          <div>
            <p className="text-2xl font-bold text-blue-600">+1532</p>
            <p className="text-sm text-gray-500">Entreprises impliquées</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
