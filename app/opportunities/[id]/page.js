"use client";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getOpportunityDetails, applyForOpportunity } from '../../../services/api';

export default function OpportunityDetail() {
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const [opportunity, setOpportunity] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchOpportunity = async () => {
        try {
          const data = await getOpportunityDetails(id);
          setOpportunity(data);
        } catch (error) {
          console.error('Failed to fetch opportunity details:', error);
        }
      };
      fetchOpportunity();
    }
  }, [id]);

  if (!opportunity) return <p>Chargement...</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Afficher l'image de l'entreprise */}
      {opportunity.companyImage && (
        <div className="relative h-40 mb-4">
          <Image
            src={opportunity.companyImage}
            alt={opportunity.company}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}

      <h1 className="text-2xl font-bold mb-4">{opportunity.title}</h1>
      <p className="mb-2">{opportunity.description}</p>

      <ul className="mb-4">
        <li><strong>Entreprise:</strong> {opportunity.company}</li>
        <li><strong>Lieu:</strong> {opportunity.location}</li>
        <li><strong>Salaire:</strong> {opportunity.salary}</li>
        <li><strong>Date limite:</strong> {new Date(opportunity.dateLimit).toLocaleDateString()}</li>
        <li><strong>Secteurs:</strong> {opportunity.sectors}</li>
        <li><strong>Public cible:</strong> {opportunity.targetAudience}</li>
        <li><strong>Avantages:</strong> {opportunity.advantages}</li>
        <li><strong>Processus de sélection:</strong> {opportunity.selectionProcess}</li>
      </ul>

      <button
        onClick={() => applyForOpportunity(opportunity.id)}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
      >
        Postuler pour cette opportunité
      </button>
    </div>
  );
}
