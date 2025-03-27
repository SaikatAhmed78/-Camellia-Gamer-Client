import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import bgImage from '../../src/assets/banner/neon-frame-with-stars-yellow-poster-casino-brick-wall-background_851328-97.avif';

const UpdateReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await fetch(`https://chill-gamer-omega.vercel.app/review/${id}`);
        console.log(response)
        if (!response.ok) throw new Error('Failed to fetch review');
        
        const data = await response.json();
        setReview(data);
      } catch (error) {
        toast.error('Failed to load review data. Please try again.');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReview();
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedReview = Object.fromEntries(formData);
  
    fetch(`https://chill-gamer-omega.vercel.app/review/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedReview),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to update review');
        }
        return response.json();
      })
      .then((data) => {
        if(data.modifiedCount > 0){

          toast.success('Review updated successfully');
          navigate('/myReviews');
        }
      })
      .catch((error) => {
        toast.error('Failed to update review. Please try again.');
        console.error('Error:', error);
      });
  };
  

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="bg-black bg-opacity-75 shadow-2xl rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center text-purple-300 mb-6">Update Your Review</h1>
        {loading ? (
          <p className="text-white text-center">Loading...</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-white">
                Game Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={review?.title || ''}
                required
                className="mt-2 w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-white">
                Comment
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                defaultValue={review?.description || ''}
                required
                className="mt-2 w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="rating" className="block text-sm font-medium text-white">
                Rating
              </label>
              <input
                type="number"
                id="rating"
                name="ratingN"
                min="1"
                max="10"
                defaultValue={review?.ratingN || ''}
                required
                className="mt-2 w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="genre" className="block text-sm font-medium text-white">
                Genre
              </label>
              <input
                type="text"
                id="genre"
                name="genre"
                defaultValue={review?.genre || ''}
                required
                className="mt-2 w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="userEmail" className="block text-sm font-medium text-white">
                User Email
              </label>
              <input
                type="email"
                id="userEmail"
                name="userEmail"
                value={review?.userEmail || ''}
                readOnly
                className="mt-2 w-full px-4 py-2 rounded-md bg-gray-600 text-white"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="userName" className="block text-sm font-medium text-white">
                User Name
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={review?.userName || ''}
                readOnly
                className="mt-2 w-full px-4 py-2 rounded-md bg-gray-600 text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-purple-500 text-white font-semibold rounded-md shadow-lg hover:bg-purple-600 transition duration-300"
            >
              Update Review
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UpdateReview;
