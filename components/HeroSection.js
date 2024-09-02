import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 p-10 rounded-xl mb-10 shadow-xl">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          D&eacute;veloppez votre <span className="text-blue-600">entreprise</span> avec nous
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Explorez des opportunit&eacute;s, connectez-vous avec des entreprises togolaises, et inscrivez-vous pour d&eacute;couvrir des offres exclusives.
        </p>
        <div className="flex justify-center space-x-6">
          <Link href="/register" legacyBehavior>
            <a className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition duration-300 shadow-md">
              Trouvez une opportunit&eacute;
            </a>
          </Link>
          <Link href="/opportunities" legacyBehavior>
            <a className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 font-semibold px-8 py-4 rounded-full transition duration-300 shadow-md">
              D&eacute;couvrir les offres
            </a>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
          <Image src="/45.png" alt="Offers" width={50} height={50} className="mr-4" />
          <div>
            <p className="text-3xl font-bold text-blue-600">+45</p>
            <p className="text-base text-gray-500">Offres d&apos;accompagnement</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
          <Image src="/champ.png" alt="Entrepreneurs" width={50} height={50} className="mr-4" />
          <div>
            <p className="text-3xl font-bold text-blue-600">+2500</p>
            <p className="text-base text-gray-500">Entrepreneurs, startups</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
          <Image src="/reunion.png" alt="Events" width={50} height={50} className="mr-4" />
          <div>
            <p className="text-3xl font-bold text-blue-600">+1532</p>
            <p className="text-base text-gray-500">Entreprises impliqu&eacute;es</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
