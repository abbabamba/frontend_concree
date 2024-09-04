import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Lancez votre entreprise et bénéficiez d&apos;un écosystème de qualité
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Une vitrine attractive pour votre business !
            </h3>
            <Image 
              src="/vitrine.png" 
              alt="Business showcase" 
              width={500} 
              height={375} 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">
              Des opportunités inédites pour votre entreprise !
            </h3>
            <ul className="space-y-4">
              {[
                "Identifier des offres d&apos;accompagnement",
                "Accéder à des formations gratuites",
                "Mettre en avant vos réalisations",
                "Trouver des investisseurs et des partenaires",
                "Développer votre réseau"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-green-500 mr-3" size={24} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
