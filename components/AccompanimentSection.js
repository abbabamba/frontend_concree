import React from 'react';
import Image from 'next/image';

const AccompanimentSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-2">Une expérience unique de</h2>
        <h3 className="text-center text-xl text-green-600 font-semibold mb-8">l'écosystème entrepreneurial</h3>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image src="/wekomkom.png" alt="Weokomkom App" width={400} height={300} className="rounded-lg" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h4 className="text-xl font-bold mb-2">Boutique d'Accompagnement</h4>
              <p className="mb-4">La Boutique d'Accompagnement est votre guichet unique pour accéder à une gamme complète de services et de ressources conçus pour propulser votre entreprise.</p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full">Boutique →</button>
            </div>
          </div>
        </div>

        <h3 className="text-center text-2xl font-bold mb-8">Digitalisez et promouvez vos offres d'accompagnement</h3>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h4 className="text-lg font-semibold mb-4">Gestion simplifiée et partagée de votre structure</h4>
            <ul className="space-y-2">
              <li>✓ Création et offres dynamiques</li>
              <li>✓ Publication de vos offres et opportunités</li>
              <li>✓ Gestion des candidatures et sélections</li>
              <li>✓ Suivi de vos bénéficiaires</li>
              <li>✓ Tracking et reporting de vos accompagnements</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Parmi les structures déjà sur Weokomkom</h4>
            <div className="flex flex-wrap gap-4">
            <Image src="/dkrhub.png" alt="Partner 1" width={80} height={40} />
            <Image src="/ignit.png" alt="Partner 2" width={80} height={40} />
              <Image src="/jokkolabs.png" alt="Partner 1" width={80} height={40} />
              <Image src="/akassaa.png" alt="Partner 2" width={80} height={40} />
              <Image src="/xidma.png" alt="Partner 2" width={80} height={40} />
              <Image src="/fenta.png" alt="Partner 2" width={80} height={40} />

            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between bg-green-100 rounded-lg p-6">
          <div>
            <h4 className="text-lg font-semibold mb-4">Votre plateforme WEOKOMKOM c'est plus de:</h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-3xl font-bold text-blue-600">+1532</p>
                <p>Entrepreneurs</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">+75</p>
                <p>Structures d'accompagnement</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">+10</p>
                <p>Pays</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">+148</p>
                <p>Opportunités</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">+762</p>
                <p>Offres d'accompagnement</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">+162</p>
                <p>Formations</p>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <Image src="/peoplewe.png" alt="People using Weokomkom" width={300} height={200} className="rounded-lg" />
            <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full">Créer votre structure maintenant →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccompanimentSection;