import React from 'react';
import Image from 'next/image';

const PartnerSection = () => {
  const partners = [
    { name: 'USAID', logo: '/usaid.png' },
    { name: 'PPI', logo: '/ppi.png' },
    { name: 'Hult Prize', logo: '/dkrhub.png' },
    { name: 'I am the code', logo: '/ignit.png' },
    { name: 'Jokkolabs', logo: '/jokkolabs.png' },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Ils ont choisi notre plateforme</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner) => (
            <div key={partner.name} className="w-24 h-24 flex items-center justify-center">
              <Image src={partner.logo} alt={partner.name} width={80} height={80} objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;