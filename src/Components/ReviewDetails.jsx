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
        const response = await fetch(`https://chill-gamer-omega.vercel.app/review/${id}`);
        if (!response.ok) throw new Error('Failed to fetch review');
        const data = await response.json();
        console.log(data)
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
      const response = await fetch('https://chill-gamer-omega.vercel.app/watchlist', {
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
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
 
        <div className="flex justify-center items-center">
          <img src={review.coverImage} alt={review.title} className="rounded-lg shadow-lg w-full max-w-sm" />
        </div>


        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-4xl font-bold text-[#6B46C1] text-center">{review.title}</h2>
          <p className="text-gray-700">{review.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-yellow-500 font-bold">{review.ratingN}/10</span>
            <span className="text-gray-500 italic">{review.genre}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Reviewed by: {review.userName}</span>
            <span className="text-gray-600">{review.userEmail}</span>
          </div>
          <button
            onClick={addToWatchlist}
            className="w-full py-3 px-5 bg-[#6B46C1] text-white font-semibold rounded-full shadow-lg hover:bg-[#553C9A] transition duration-300 ease-in-out"
          >
            Add to Watchlist
          </button>
        </div>

      </div>
    </div>
  );
};

export default ReviewDetails;
