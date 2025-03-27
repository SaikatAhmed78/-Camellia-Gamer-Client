import React from "react";
import Slider from "react-slick";
import { Typewriter } from "react-simple-typewriter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../src/assets/banner/—Pngtree—castle game scene mysterious fantasy_2251025.png";
import banner2 from "../../src/assets/banner/—Pngtree—epic dragon battle fantasy background_15755645.jpg";
import banner3 from "../../src/assets/banner/—Pngtree—poster for print and web_15735114.jpg";
import banner4 from "../../src/assets/banner/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.avif";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const banners = [
    {
      image: banner1,
      title: "Welcome to Chill Gamer",
      subtitle: "Discover the latest and greatest in gaming reviews.",
    },
    {
      image: banner2,
      title: "Explore and Share Game Reviews",
      subtitle: "Join our community and share your thoughts on your favorite games.",
    },
    {
      image: banner3,
      title: "Find Your Next Favorite Game",
      subtitle: "Get recommendations and find the perfect game to play next.",
    },
    {
      image: banner4,
      title: "Step into the World of Neon",
      subtitle: "Immerse yourself in vibrant neon landscapes and futuristic adventures.",
    },
  ];

  return (
    <div className="banner h-[600px] relative overflow-hidden rounded-lg">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div
            key={index}
            className="h-[600px] relative flex items-center justify-center"
          >
            <img
              src={banner.image}
              alt={`Banner ${index + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col items-center justify-center text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-xl">
                <Typewriter
                  words={[banner.title]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={1000}
                />
              </h2>
              <p className="text-lg md:text-xl text-gray-300 drop-shadow-lg px-6 max-w-3xl">
                {banner.subtitle}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
