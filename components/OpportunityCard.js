import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin } from 'lucide-react';

const OpportunityCard = ({ opportunity }) => {
  const { id, title, image, date, location, description } = opportunity;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative h-40">
      <Image src="/offer.png" alt="Offers" width={50} height={50} className="mr-4" />

      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{title}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar size={16} className="mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPin size={16} className="mr-2" />
          <span>{location}</span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
      <div className="px-4 pb-4">
        <Link href={`/opportunities/${id}`} passHref>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300">
            Voir l&apos;opportunit&eacute;
          </button>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(OpportunityCard);
