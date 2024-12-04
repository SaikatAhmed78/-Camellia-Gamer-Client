import React from 'react';
import trendingGame1 from '../../src/assets/extraone/download (1).jpg'; 
import trendingGame2 from '../../src/assets/extraone/download.jpg';
import trendingGame3 from '../../src/assets/extraone/download (1).jpg';

const ExtraSectionOne = () => {
  return (
    <div className="container mx-auto mb-10">
      <h2 className="text-3xl font-bold text-center mb-8">Top Trending Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-5">
          <img src={trendingGame1} alt="Trending Game 1" className="h-48 w-full object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold mb-2">Game Title 1</h3>
          <p className="text-gray-700 mb-4">Brief description about the trending game 1. Highlight why it is trending and what makes it unique.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Explore Details</button>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5">
          <img src={trendingGame2} alt="Trending Game 2" className="h-48 w-full object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold mb-2">Game Title 2</h3>
          <p className="text-gray-700 mb-4">Brief description about the trending game 2. Highlight why it is trending and what makes it unique.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Explore Details</button>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5">
          <img src={trendingGame3} alt="Trending Game 3" className="h-48 w-full object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold mb-2">Game Title 3</h3>
          <p className="text-gray-700 mb-4">Brief description about the trending game 3. Highlight why it is trending and what makes it unique.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Explore Details</button>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionOne;
