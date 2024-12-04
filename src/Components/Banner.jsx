import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../../src/assets/banner/—Pngtree—castle game scene mysterious fantasy_2251025.png'; 
import banner2 from '../../src/assets/banner/—Pngtree—epic dragon battle fantasy background_15755645.jpg'; 
import banner3 from '../../src/assets/banner/—Pngtree—poster for print and web_15735114.jpg';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="banner h-96 mb-10">
      <Slider {...settings}>
        <div className="h-96 flex items-center justify-center relative">
          <img src={banner1} alt="Banner 1" className="h-full w-full object-cover"/>
          <div className="absolute bg-black bg-opacity-70 w-full h-full flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Welcome to Chill Gamer</h2>
            <p className="text-lg text-white drop-shadow-lg">Discover the latest and greatest in gaming reviews.</p>
          </div>
        </div>
        <div className="h-96 flex items-center justify-center relative">
          <img src={banner2} alt="Banner 2" className="h-full w-full object-cover"/>
          <div className="absolute bg-black bg-opacity-70 w-full h-full flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Explore and Share Game Reviews</h2>
            <p className="text-lg text-white drop-shadow-lg">Join our community and share your thoughts on your favorite games.</p>
          </div>
        </div>
        <div className="h-96 flex items-center justify-center relative">
          <img src={banner3} alt="Banner 3" className="h-full w-full object-cover"/>
          <div className="absolute bg-black bg-opacity-70 w-full h-full flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Find Your Next Favorite Game</h2>
            <p className="text-lg text-white drop-shadow-lg">Get recommendations and find the perfect game to play next.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
