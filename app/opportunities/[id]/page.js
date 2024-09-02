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
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Company Image */}
      {opportunity.companyImage && (
        <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
          <Image
            src={opportunity.companyImage}
            alt={opportunity.company}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      )}

      {/* Opportunity Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{opportunity.title}</h1>
      
      {/* Opportunity Description */}
      <p className="text-lg text-gray-700 mb-6">{opportunity.description}</p>

      {/* Opportunity Details */}
      <ul className="space-y-2 text-gray-600 mb-6">
        <li><strong>Entreprise:</strong> {opportunity.company}</li>
        <li><strong>Lieu:</strong> {opportunity.location}</li>
        <li><strong>Salaire:</strong> {opportunity.salary}</li>
        <li><strong>Date limite:</strong> {new Date(opportunity.dateLimit).toLocaleDateString()}</li>
        <li><strong>Secteurs:</strong> {opportunity.sectors}</li>
        <li><strong>Public cible:</strong> {opportunity.targetAudience}</li>
        <li><strong>Avantages:</strong> {opportunity.advantages}</li>
        <li><strong>Processus de sélection:</strong> {opportunity.selectionProcess}</li>
      </ul>

      {/* Apply Button */}
      <div className="text-center">
        <button
          onClick={() => applyForOpportunity(opportunity.id)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition duration-300"
        >
          Postuler pour cette opportunité
        </button>
      </div>
    </div>
  );
}
