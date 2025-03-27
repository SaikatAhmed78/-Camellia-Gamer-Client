import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HighestRated = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('https://chill-gamer-omega.vercel.app/highest-rated-games');
        if (!response.ok) {
          throw new Error('Failed to fetch games.');
        }
        const data = await response.json();
        setGames(data || []); 
      } catch (error) {
        console.error('Error fetching games:', error);
        setGames([]); 
      }
    };
    fetchGames();
  }, []);

  const handleExploreDetails = (gameId) => {
    navigate(`/review/${gameId}`);
  };

  return (
    <div className="container mx-auto mb-10 mt-10">
      <h2 className="text-4xl font-bold text-center mb-2">Highest Rated Games</h2>
      <p className="text-center text-gray-500 text-lg mb-5">
        Discover the most loved games as rated by players across the globe. Only the best make it to the top!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.length > 0 ? ( 
          games.slice(0, 6).map((game) => (
            <div key={game._id} className="bg-white shadow-lg rounded-lg p-5">
              <img
                src={game.coverImage}
                alt={game.title}
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
              <p className="text-gray-700 mb-4">
                {game.description?.slice(0, 70) || 'No description available'}...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-bold">{game.ratingN}/10</span>
                <button
                  className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                  onClick={() => handleExploreDetails(game._id)}
                >
                  Explore Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700">No games found.</p>
        )}
      </div>
    </div>
  );
};

export default HighestRated;
