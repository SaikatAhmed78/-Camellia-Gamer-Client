import React, { useState, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [hover, setHover] = useState(null);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'You need to be logged in to add a review.',
      });
      navigate('/login');
      return;
    }

    const review = {
      title,
      description,
      rating,
      year,
      genre,
      userEmail: user.email,
      userName: user.displayName,
      userPhoto: user.photoURL
    };

    fetch('http://localhost:5000/review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(review)
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Review added successfully!',
            showConfirmButton: false,
            timer: 1500
          });
          setTitle('');
          setCoverImage('');
          setDescription('');
          setRating(0);
          setYear('');
          setGenre('');
        } else {
          throw new Error('Failed to add review.');
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Failed to add review!',
          text: 'Please try again.',
        });
        console.error('Error:', error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#6B46C1]">Add New Review</h2>
        <form onSubmit={handleAddReview} className="space-y-6">
        
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Game Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter the game title"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#6B46C1] focus:border-[#6B46C1]"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter the review description"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#6B46C1] focus:border-[#6B46C1]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
            <div className="flex items-center">
              {[...Array(10)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label key={i}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      className="hidden"
                      onClick={() => setRating(ratingValue)}
                    />
                    <FaStar
                      className={`cursor-pointer text-2xl ${ratingValue <= (hover || rating) ? 'text-[#FFD700]' : 'text-gray-300'}`}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>
          </div>
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
            <input
              type="number"
              id="year"
              name="year"
              placeholder="Enter the year of release"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#6B46C1] focus:border-[#6B46C1]"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="genre" className="block text-sm font-medium text-gray-700">Genre</label>
            <select
              id="genre"
              name="genre"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#6B46C1] focus:border-[#6B46C1]"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
            >
              <option value="">Select Genre</option>
              <option value="Action">Action</option>
              <option value="RPG">RPG</option>
              <option value="Adventure">Adventure</option>
              <option value="Simulation">Simulation</option>
              <option value="Sports">Sports</option>
            </select>
          </div>
          <div>
            <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">User Email</label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              value={user.email}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700">User Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={user.displayName}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#6B46C1] text-white font-semibold rounded-md shadow-md hover:bg-[#553C9A] transition duration-300 ease-in-out"
          >
            Add Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
