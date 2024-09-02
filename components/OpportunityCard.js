import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin } from 'lucide-react';

const OpportunityCard = ({ opportunity }) => {
  const { id, title, image, date, location, description } = opportunity;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-40">
        <Image
          src={image || "/offer.png"}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 truncate">{title}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Calendar size={16} className="mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin size={16} className="mr-2" />
          <span>{location}</span>
        </div>
        <p className="text-sm text-gray-700 line-clamp-2">{description}</p>
      </div>
      <div className="px-4 pb-4">
        <Link href={`/opportunities/${id}`} passHref>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-300">
            Voir l'opportunité
          </button>
        </Link>
      </div>
    </div>
  );
};



export default React.memo(OpportunityCard);
