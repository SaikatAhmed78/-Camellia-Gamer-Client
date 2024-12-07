import React, { useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';


const AllReviews = () => {
  const loadedReviews = useLoaderData();
  const [reviews, setReviews] = useState(loadedReviews);
  const [sortOption, setSortOption] = useState('');
  const [filterOption, setFilterOption] = useState('');

  const handleSortChange = (e) => {
    const { value } = e.target;
    setSortOption(value);
    if (value === 'rating-asc') {
      setReviews([...reviews].sort((a, b) => a.rating - b.rating));
    } else if (value === 'rating-desc') {
      setReviews([...reviews].sort((a, b) => b.rating - a.rating));
    } else if (value === 'year-asc') {
      setReviews([...reviews].sort((a, b) => a.year - b.year));
    } else if (value === 'year-desc') {
      setReviews([...reviews].sort((a, b) => b.year - a.year));
    }
  };

  const handleFilterChange = (e) => {
    const { value } = e.target;
    setFilterOption(value);
    if (value) {
      const filteredReviews = loadedReviews.filter((review) => review.genre.includes(value));
      setReviews(filteredReviews);
    } else {
      setReviews(loadedReviews);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 p-5">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#6B46C1]">All Reviews: {reviews.length}</h2>

      <div className="flex justify-between mb-6 w-full max-w-4xl">
        <select onChange={handleSortChange} className="p-2 border rounded bg-[#6B46C1] text-white">
          <option value="">Sort By</option>
          <option value="rating-asc">Rating (Low to High)</option>
          <option value="rating-desc">Rating (High to Low)</option>
          <option value="year-asc">Year (Oldest to Newest)</option>
          <option value="year-desc">Year (Newest to Oldest)</option>
        </select>
        <select onChange={handleFilterChange} className="p-2 border rounded bg-[#6B46C1] text-white">
          <option value="">Filter By Genre</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="RPG">RPG</option>
          <option value="Simulation">Simulation</option>
          <option value="Sports">Sports</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {reviews.map((review) => (
          <div key={review._id} className="bg-white shadow-lg rounded-lg p-5 transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
            <img src={review.coverImage} alt={review.title} className="rounded-lg mb-4 w-full h-48 object-cover" />
            <h3 className="text-2xl font-semibold mb-2 text-[#6B46C1]">{review.title}</h3>
            <p className="text-gray-700 mb-4 truncate">{review.description}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-yellow-500 font-bold">{review.rating}/10</span>
              <span className="text-gray-500 italic">{review.year}</span>
            </div>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">{review.genre}</span>
            <Link to={`/review/${review._id}`} className="w-full py-2 px-4 bg-[#6B46C1] text-white font-semibold rounded-md shadow-md hover:bg-[#553C9A] transition duration-300 ease-in-out text-center block mt-4">
              Explore Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;


