"use client";
import React, { useEffect, useState } from 'react';
import { getOpportunities } from '../services/api';
import OpportunityCard from './OpportunityCard';

const OpportunityList = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState({ location: '', company: '' });
  const [sortBy, setSortBy] = useState('date');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        setIsLoading(true);
        const data = await getOpportunities(page, filter, sortBy);
        setOpportunities((prevOpportunities) => [...prevOpportunities, ...data]);
        setHasMore(data.length > 0);
      } catch (error) {
        console.error('Erreur lors de la récupération des opportunités:', error);
        setError('Impossible de charger les opportunités. Veuillez réessayer plus tard.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchOpportunities();
  }, [page, filter, sortBy]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (error) return <p className="text-red-500 text-center my-4">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Opportunités disponibles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 mb-2">Lieu:</label>
          <input
            type="text"
            value={filter.location}
            onChange={(e) => setFilter({ ...filter, location: e.target.value })}
            className="border-gray-300 p-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Entreprise:</label>
          <input
            type="text"
            value={filter.company}
            onChange={(e) => setFilter({ ...filter, company: e.target.value })}
            className="border-gray-300 p-3 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {opportunities.length === 0 ? (
        <p className="text-center text-gray-500">Aucune opportunité disponible pour le moment.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {opportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
      )}

      {isLoading && <p className="text-center text-gray-500">Chargement des opportunités...</p>}

      {!isLoading && hasMore && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition duration-300"
          >
            Charger plus
          </button>
        </div>
      )}
    </div>
  );
};

export default OpportunityList;
