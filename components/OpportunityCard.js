import React from 'react';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';

const OpportunityCard = ({ opportunity }) => {
  const { id, title, date, location, description, duration } = opportunity;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
      <div className="relative h-48 w-full">
        <img
          src="/offre1.png"
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 rounded-br-lg text-sm font-semibold">
          Nouvelle
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 truncate">{title}</h3>
        <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
          <div className="flex items-center mr-4 mb-2">
            <Calendar size={16} className="mr-2 text-blue-500" />
            <span>{date}</span>
          </div>
          <div className="flex items-center mr-4 mb-2">
            <MapPin size={16} className="mr-2 text-blue-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center mb-2">
            <Clock size={16} className="mr-2 text-blue-500" />
            <span>{duration}</span>
          </div>
        </div>
        <p className="text-sm text-gray-700 line-clamp-3 mb-6">{description}</p>
        <Link href={`/opportunities/${id}`}>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center group">
            Voir l'opportunité
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(OpportunityCard);