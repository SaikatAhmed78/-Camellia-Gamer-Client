import React from 'react';
import trendingGame1 from '../../src/assets/extraone/game--fortnite.jpg.webp'; 
import trendingGame2 from '../../src/assets/extraone/game--league-of-legends.jpg.webp';
import trendingGame3 from '../../src/assets/extraone/game--call-of-duty-modern-warfare-ii-iii-warzone-black-ops-6.jpg';

const ExtraSectionOne = () => {
  return (
    <div className="container mx-auto mb-10">
      <h2 className="text-3xl font-bold text-center mb-8">Top Trending Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-5">
          <img src={trendingGame1} alt="Trending Game 1" className="h-48 w-full object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold mb-2">ROBLOX</h3>
          <p className="text-gray-700 mb-4">ROBLOX was the #3 most played game in October 2024, based on the number of monthly active users or players. ROBLOX is a Sandbox game developed by Roblox that can be played on PlayStation 5, iOS, Android, Meta Quest, PlayStation 4, Windows, Xbox One, Mac.</p>
          <div className="flex justify-center">
            <a href="https://www.roblox.com/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center">Explore Details</a>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5">
          <img src={trendingGame2} alt="Trending Game 2" className="h-48 w-full object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold mb-2">League of Legends</h3>
          <p className="text-gray-700 mb-4">League of Legends was the #9 most played game in October 2024, based on the number of monthly active users or players. League of Legends is a Battle Arena game developed by Riot Games that can be played on Windows, Mac.</p>
          <div className="flex justify-center">
            <a href="https://www.leagueoflegends.com/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center">Explore Details</a>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5">
          <img src={trendingGame3} alt="Trending Game 3" className="h-48 w-full object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold mb-2">Call of Duty: Modern Warfare</h3>
          <p className="text-gray-700 mb-4">Call of Duty: Modern Warfare II/III/Warzone/Black Ops 6 was the #2 most played game in October 2024, based on the number of monthly active users or players. Call of Duty is a first-person shooter game developed by Infinity Ward and published by Activision.</p>
          <div className="flex justify-center">
            <a href="https://www.callofduty.com/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center">Explore Details</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionOne;
