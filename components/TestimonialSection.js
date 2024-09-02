import React from 'react';
import Image from 'next/image';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Amadou Diop ',
      role: 'Fondateur / Green Solution',
      content: "Nous utilisons cette plateforme depuis plus d'un an pour notre entreprise et elle nous a permis de progresser rapidement et efficacement.",
      imageUrl: '',
    },
    {
      id: 2,
      name: 'Cheikh Fall',
      role: 'Educonnect et Directeur des Opérations',
      content: 'Grâce à cette plateforme, nous avons pu mettre en place une stratégie de croissance efficace et trouver des partenaires clés pour notre développement.',
      imageUrl: '',
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Ils parlent de nous !</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;