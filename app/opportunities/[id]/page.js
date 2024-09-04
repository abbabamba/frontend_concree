"use client";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getOpportunityDetails, applyForOpportunity } from '../../../services/api';
import { Calendar, MapPin, Clock, Briefcase, Users, CheckCircle } from 'lucide-react';

export default function OpportunityDetail() {
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const [opportunity, setOpportunity] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchOpportunity = async () => {
        try {
          const data = await getOpportunityDetails(id);
          setOpportunity(data);
        } catch (error) {
          console.error('Failed to fetch opportunity details:', error);
          setError('Failed to load opportunity details.');
        } finally {
          setIsLoading(false);
        }
      };
      fetchOpportunity();
    }
  }, [id]);

  if (isLoading) 
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error) 
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Erreur!</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b pb-8">
        <div className="flex items-center mb-6 md:mb-0">
          {opportunity.companyImage && (
            <div className="flex-shrink-0 mr-6">
              <Image src="/offre1.png" alt="Company Logo" width={120} height={120} className="rounded-lg shadow-md" />
            </div>
          )}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{opportunity.title}</h1>
            <p className="text-xl text-blue-600 font-semibold mb-2">{opportunity.company}</p>
            <div className="flex items-center text-gray-600 space-x-4">
              <div className="flex items-center"><MapPin size={18} className="mr-1" /> {opportunity.location}</div>
              <div className="flex items-center"><Clock size={18} className="mr-1" /> {opportunity.duration}</div>
              <div className="flex items-center"><Calendar size={18} className="mr-1" /> {new Date(opportunity.dateLimit).toLocaleDateString()}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 w-full md:w-auto">
          <button
            onClick={() => applyForOpportunity(opportunity.id)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1"
          >
            Postuler
          </button>
          <button className="bg-white hover:bg-gray-100 text-blue-600 border-2 border-blue-600 font-semibold py-3 px-8 rounded-lg transition duration-300">
            Partager
          </button>
        </div>
      </div>

      {/* Opportunity Details */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Description de l&apos;opportunité</h2>
        <p className="text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-lg shadow-inner">{opportunity.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Opportunity Information */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Informations sur l&apos;opportunité</h3>
          <ul className="space-y-3">
            <InfoItem icon={Briefcase} label="Secteur(s)" value={opportunity.sectors} />
            <InfoItem icon={Users} label="Ciblé(s)" value={opportunity.targetAudience} />
            <InfoItem icon={CheckCircle} label="Type d&apos;opportunité" value={opportunity.opportunityType} />
          </ul>
        </div>

        {/* Additional Details */}
        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Détails supplémentaires</h3>
          <ul className="space-y-3">
            <InfoItem icon={CheckCircle} label="Avantages" value={opportunity.advantages} />
            <InfoItem icon={Users} label="Processus de sélection" value={opportunity.selectionProcess} />
          </ul>
        </div>
      </div>
    </div>
  );
}

const InfoItem = ({ icon: Icon, label, value }) => (
  <li className="flex items-start">
    <Icon size={20} className="mr-3 text-gray-600 mt-1" />
    <div>
      <span className="font-semibold text-gray-700">{label}:</span> <span className="text-gray-600">{value}</span>
    </div>
  </li>
);
