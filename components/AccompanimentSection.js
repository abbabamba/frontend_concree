import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 p-10 rounded-xl mb-10 shadow-xl">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          Développez votre <span className="text-blue-600">entreprise</span> avec nous
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Explorez des opportunités, connectez-vous avec des entreprises togolaises, et inscrivez-vous pour découvrir des offres exclusives.
        </p>
        
       
    </section>
  );
};

export default HeroSection;
