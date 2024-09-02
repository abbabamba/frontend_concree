import React from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Lancer votre entreprise et bénéficier d'un écosystème de qualité.</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Une vitrine attractive pour votre business !</h3>
          <Image src="/vitrine.png" alt="Business showcase" width={400} height={300} />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Des opportunités inédites pour votre entreprise !</h3>
          <ul className="list-disc list-inside">
            <li>Identifier des offres d'accompagnement</li>
            <li>Accéder à des formations gratuites</li>
            <li>Mettre en avant vos réalisations</li>
            <li>Trouver des investisseurs et des partenaires</li>
            <li>Développer votre réseau</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;