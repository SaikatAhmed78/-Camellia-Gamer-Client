import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, []);

  return (
    <div className="container mx-auto mb-10 p-5">
      <h2 className="text-4xl font-bold text-center mb-8">All Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review._id} className="bg-white shadow-md rounded-lg p-5 transition-transform transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold mb-2">{review.title}</h3>
            <p className="text-gray-700 mb-4">{review.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-yellow-500 font-bold">{review.rating}/10</span>
              <p className="text-gray-500 italic">{review.year}</p>
            </div>
            <div className="mt-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">{review.genre}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
