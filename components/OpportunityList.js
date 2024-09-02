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
        setOpportunities(prevOpportunities => [...prevOpportunities, ...data]);
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
    setPage(prevPage => prevPage + 1);
  };

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Opportunités disponibles</h2>
      <div className="mb-4">
        <label className="block mb-2">Lieu:</label>
        <input
          type="text"
          value={filter.location}
          onChange={(e) => setFilter({ ...filter, location: e.target.value })}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Entreprise:</label>
        <input
          type="text"
          value={filter.company}
          onChange={(e) => setFilter({ ...filter, company: e.target.value })}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Trier par:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="date">Date</option>
          <option value="salary">Salaire</option>
        </select>
      </div>

      {opportunities.length === 0 ? (
        <p>Aucune opportunité disponible pour le moment.</p>
      ) : (
        <div className="grid gap-4">
          {opportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
      )}

      {isLoading && <p>Chargement des opportunités...</p>}

      {!isLoading && hasMore && (
        <button onClick={handleLoadMore} className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
          Charger plus
        </button>
      )}
    </div>
  );
};

export default OpportunityList;
