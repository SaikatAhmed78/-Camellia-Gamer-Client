import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const ReviewDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState(null);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await fetch(`http://localhost:5000/review/${id}`);
        if (!response.ok) throw new Error('Failed to fetch review');
        const data = await response.json();
        setReview(data);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Failed to load review!',
          text: 'Please try again.',
        });
        console.error('Error:', error);
      }
    };

    fetchReview();
  }, [id]);

  const addToWatchlist = async () => {
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'You need to be logged in to add to the watchlist.',
      });
      return;
    }

    const watchlistItem = {
      reviewId: review._id,
      title: review.title,
      coverImage: review.coverImage,
      description: review.description,
      rating: review.rating,
      year: review.year,
      genre: review.genre,
      userEmail: user.email,
      userName: user.displayName
    };

    try {
      const response = await fetch('http://localhost:5000/watchlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(watchlistItem)
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Added to watchlist successfully!',
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        throw new Error('Failed to add to watchlist.');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Failed to add to watchlist!',
        text: 'Please try again.',
      });
      console.error('Error:', error);
    }
  };

  if (!review) {
    return <div className="text-center py-10">Loading review details...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <img src={review.coverImage} alt={review.title} className="rounded-lg mb-4 w-full" />
        <h2 className="text-3xl font-bold text-center mb-2 text-[#6B46C1]">{review.title}</h2>
        <p className="text-gray-700 mb-4">{review.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-yellow-500 font-bold">{review.rating}/10</span>
          <span className="text-gray-500 italic">{review.genre}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Reviewed by: {review.userName}</span>
          <span className="text-gray-600">{review.userEmail}</span>
        </div>
        <button
          onClick={addToWatchlist}
          className="w-full py-2 px-4 bg-[#6B46C1] text-white font-semibold rounded-md shadow-md hover:bg-[#553C9A] transition duration-300 ease-in-out"
        >
          Add to WatchList
        </button>
      </div>
    </div>
  );
};

export default ReviewDetails;
