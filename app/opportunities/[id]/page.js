"use client";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getOpportunityDetails, applyForOpportunity } from '../../../services/api';

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

  if (isLoading) return <p className="text-center text-gray-500">Chargement...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        {/* Company Image */}
        {opportunity.companyImage && (
          <div className="flex-shrink-0">
            <Image
              src="/offer.png"
              alt={opportunity.company}
              width={150}
              height={150}
              className="rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Opportunity Title and Company Info */}
        <div className="flex-grow mt-6 md:mt-0 md:ml-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{opportunity.title}</h1>
          <p className="text-gray-600 mb-4">Par {opportunity.company}</p>
          <div className="text-sm text-gray-500 space-y-1">
            <p><strong>Lieu:</strong> {opportunity.location}</p>
            <p><strong>Durée:</strong> {opportunity.duration}</p>
            <p><strong>Date limite:</strong> {new Date(opportunity.dateLimit).toLocaleDateString()}</p>
          </div>
        </div>

        {/* Apply and Share Buttons */}
        <div className="flex flex-col items-center mt-6 md:mt-0 md:ml-auto">
          <button
            onClick={() => applyForOpportunity(opportunity.id)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition duration-300 mb-3"
          >
            Postuler
          </button>
          <button className="w-full bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 font-semibold py-3 px-6 rounded-md transition duration-300">
            Partager
          </button>
        </div>
      </div>

      {/* Opportunity Details */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-inner mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed">{opportunity.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Opportunity Information */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Informations sur l&apos;opportunité</h3>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Secteur(s):</strong> {opportunity.sectors}</li>
            <li><strong>Ciblé(s):</strong> {opportunity.targetAudience}</li>
            <li><strong>Type d&apos;opportunité:</strong> {opportunity.opportunityType}</li>
          </ul>
        </div>

        {/* Additional Details */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Détails supplémentaires</h3>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Avantages:</strong> {opportunity.advantages}</li>
            <li><strong>Processus de sélection:</strong> {opportunity.selectionProcess}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
