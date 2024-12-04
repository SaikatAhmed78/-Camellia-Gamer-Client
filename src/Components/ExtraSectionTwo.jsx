import React from 'react';

const ExtraSectionTwo = () => {
  return (
    <div className="container mx-auto mb-10 p-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Upcoming Releases</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg p-5 transition-transform transform hover:-translate-y-1">
          <h3 className="text-2xl font-semibold mb-2">Game Title 1</h3>
          <p className="text-gray-700 mb-4">Stay tuned for the release of Game Title 1. Discover new features and an immersive storyline. <span className="text-gray-900 font-bold">Release Date: January 2025</span></p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-5 transition-transform transform hover:-translate-y-1">
          <h3 className="text-2xl font-semibold mb-2">Game Title 2</h3>
          <p className="text-gray-700 mb-4">Exciting adventures await with Game Title 2. Explore breathtaking worlds and challenging quests. <span className="text-gray-900 font-bold">Release Date: March 2025</span></p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-5 transition-transform transform hover:-translate-y-1">
          <h3 className="text-2xl font-semibold mb-2">Game Title 3</h3>
          <p className="text-gray-700 mb-4">Get ready for Game Title 3, featuring stunning graphics and intense gameplay. <span className="text-gray-900 font-bold">Release Date: May 2025</span></p>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionTwo;
