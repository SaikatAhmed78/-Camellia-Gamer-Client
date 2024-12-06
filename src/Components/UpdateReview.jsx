import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await fetch(`http://localhost:5000/reviews/${id}`);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedReview = Object.fromEntries(formData);

    try {
      const response = await fetch(`http://localhost:5000/reviews/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedReview),
      });

      if (!response.ok) throw new Error('Failed to update review');
      toast.success('Review updated successfully');
      navigate('/myReviews');
    } catch (error) {
      toast.error('Failed to update review. Please try again.');
      console.error('Error:', error);
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading review details...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Update Review</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="gameTitle" className="block text-sm font-medium text-gray-700">
            Game Title
          </label>
          <input
            type="text"
            id="gameTitle"
            name="gameTitle"
            defaultValue={review?.gameTitle}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            rows="4"
            defaultValue={review?.comment}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            defaultValue={review?.rating}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="genres" className="block text-sm font-medium text-gray-700">
            Genres
          </label>
          <input
            type="text"
            id="genres"
            name="genres"
            defaultValue={review?.genres}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">
            User Email
          </label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            value={review?.userEmail}
            readOnly
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={review?.userName}
            readOnly
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300"
        >
          Update Review
        </button>
      </form>
    </div>
  );
};

export default UpdateReview;
