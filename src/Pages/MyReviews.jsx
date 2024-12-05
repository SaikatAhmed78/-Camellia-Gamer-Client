import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`http://localhost:5000/reviews?email=${user.email}`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        toast.error('Failed to load reviews. Please try again.');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchReviews();
    }
  }, [user]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this review?');
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:5000/reviews/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete');
      toast.success('Review deleted successfully');
      setReviews(reviews.filter((review) => review._id !== id));
    } catch (error) {
      toast.error('Failed to delete review. Please try again.');
      console.error('Error:', error);
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading your reviews...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">My Reviews</h1>
      {reviews.length === 0 ? (
        <div className="text-center text-gray-500">You have not written any reviews yet.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{review.gameTitle}</h2>
              <p className="text-gray-600 mb-4">{review.comment}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Rating: {review.rating}/5</span>
                <div className="flex space-x-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => toast.info('Edit functionality coming soon!')}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(review._id)}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviews;
