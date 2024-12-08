import React from 'react';
import bgImage from '../../src/assets/banner/premium_photo-1677870728119-52aef052d7ef.avif';

const ExtraSectionTwo = () => {
  const backgroundImage = `${bgImage}`;
  return (
    <div
      className="container mx-auto px-6 py-12 rounded-lg shadow-xl"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg">
        <h2 className="text-4xl font-extrabold text-center text-white mb-10 tracking-wide">
          Upcoming Game Releases 🚀
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Game Card 1 */}
          <div className="bg-white bg-opacity-90 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Assassin's Creed Shadows
              </h3>
              <p className="text-gray-700 mb-4">
                An action role-playing game by Ubisoft Quebec. A thrilling journey into a world of stealth and adventure.
                <span className="block text-gray-900 font-bold mt-2">Release Date: January 2025</span>
              </p>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 text-sm transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Game Card 2 */}
          <div className="bg-white bg-opacity-90 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Kingdom Come: Deliverance II
              </h3>
              <p className="text-gray-700 mb-4">
                Experience 15th-century Bohemia in this epic sequel by Warhorse Studios. Rich storytelling and breathtaking visuals await.
                <span className="block text-gray-900 font-bold mt-2">Release Date: March 2025</span>
              </p>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 text-sm transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Game Card 3 */}
          <div className="bg-white bg-opacity-90 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Monster Hunter Wilds
              </h3>
              <p className="text-gray-700 mb-4">
                A successor to Monster Hunter: World. Gear up for intense battles in stunning wilderness landscapes.
                <span className="block text-gray-900 font-bold mt-2">Release Date: June 2025</span>
              </p>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 text-sm transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Updated with the Latest Gaming News!
          </h3>
          <a
            href="#"
            className="inline-block bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
          >
            Subscribe Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionTwo;
