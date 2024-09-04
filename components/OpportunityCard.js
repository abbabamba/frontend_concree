import React from 'react';
import Link from 'next/link';  // Import the Link component
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const OpportunityCard = ({ opportunity }) => {
  const { id, title, date, location, description } = opportunity;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative h-48 w-full">
        <img
          src="/offre1.png"
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 truncate">{title}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Calendar size={18} className="mr-2 text-blue-500" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin size={18} className="mr-2 text-blue-500" />
          <span>{location}</span>
        </div>
        <p className="text-sm text-gray-700 line-clamp-3 mb-4">{description}</p>
        <Link href={`/opportunities/${id}`}> {/* Wrap the button with Link */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 flex items-center justify-center">
            Voir l&apos;opportunité
            <ArrowRight size={18} className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(OpportunityCard);
