import React from "react";
import { Fade } from "react-awesome-reveal";
import trendingGame1 from "../../src/assets/extraone/game--fortnite.jpg.webp";
import trendingGame2 from "../../src/assets/extraone/game--league-of-legends.jpg.webp";
import trendingGame3 from "../../src/assets/extraone/game--call-of-duty-modern-warfare-ii-iii-warzone-black-ops-6.jpg";

const ExtraSectionOne = () => {
  return (
    <div className="container mx-auto px-4 mb-12">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-500">
        Top Trending Games
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        <Fade direction="up" triggerOnce>
          <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img
              src={trendingGame1}
              alt="Trending Game 1"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-700">ROBLOX</h3>
              <p className="text-gray-600 mb-5">
                ROBLOX ranked #3 in October 2024 by monthly active players. It's
                a sandbox game available on PlayStation, iOS, Android, Windows,
                Xbox, and Mac platforms.
              </p>
              <a
                href="https://www.roblox.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700"
              >
                Explore Details
              </a>
            </div>
          </div>
        </Fade>


        <Fade direction="up" triggerOnce delay={100}>
          <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img
              src={trendingGame2}
              alt="Trending Game 2"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-700">
                League of Legends
              </h3>
              <p className="text-gray-600 mb-5">
                League of Legends ranked #9 in October 2024 by monthly active
                players. This battle arena game is playable on Windows and Mac
                platforms.
              </p>
              <a
                href="https://www.leagueoflegends.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700"
              >
                Explore Details
              </a>
            </div>
          </div>
        </Fade>


        <Fade direction="up" triggerOnce delay={200}>
          <div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img
              src={trendingGame3}
              alt="Trending Game 3"
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-700">
                Call of Duty
              </h3>
              <p className="text-gray-600 mb-5">
                Call of Duty ranked #2 in October 2024 by monthly active
                players. This first-person shooter is developed by Infinity Ward
                for multiple platforms.
              </p>
              <a
                href="https://www.callofduty.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700"
              >
                Explore Details
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ExtraSectionOne;
