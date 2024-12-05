import React from 'react';

const ExtraSectionTwo = () => {
  return (
    <div className="container mx-auto mb-10 p-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Upcoming Releases</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg p-5 transition-transform transform hover:-translate-y-1">
          <h3 className="text-2xl font-semibold mb-2">Assassin's Creed Shadows</h3>
          <p className="text-gray-700 mb-4">Assassin's Creed Shadows is an upcoming action role-playing game developed by Ubisoft Quebec and published by Ubisoft. <span className="text-gray-900 font-bold">Release Date: January 2025</span></p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-5 transition-transform transform hover:-translate-y-1">
          <h3 className="text-2xl font-semibold mb-2">Kingdom Come: Deliverance II</h3>
          <p className="text-gray-700 mb-4">Kingdom Come: Deliverance II is an upcoming action role-playing game developed by Warhorse Studios and published by Deep Silver. The sequel to Kingdom Come: Deliverance, the game is scheduled to release for PlayStation 5, Windows, and Xbox Series X/S on 11 February 2025. The game is set in 15th-century Bohemia. <span className="text-gray-900 font-bold">Release Date: March 2025</span></p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-5 transition-transform transform hover:-translate-y-1">
          <h3 className="text-2xl font-semibold mb-2">Monster Hunter Wilds</h3>
          <p className="text-gray-700 mb-4">Monster Hunter Wilds is an upcoming action role-playing video game developed and published by Capcom. A successor to Monster Hunter: World, the game is set to be released for Windows PC, PlayStation 5 and Xbox Series X and Series S on February 28, 2025. <span className="text-gray-900 font-bold">Release Date: June 2025</span></p>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionTwo;
