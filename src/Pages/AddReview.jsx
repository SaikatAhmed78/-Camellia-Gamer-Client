import React, { useState, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import bgAddImage from '../../src/assets/banner/futuristic-dj-using-virtual-reality-glasses-headline-party-play-music_23-2151418276.avif';

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [yearN, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [hover, setHover] = useState(null);

  const handleAddReview = (e) => {
    console.log(rating)
    e.preventDefault();
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'You need to be logged in to add a review.',
      });
      navigate('/login');
      return;
    }
    const ratingN = parseInt(rating)

    const year = parseInt(yearN)

    const review = {
      title,
      coverImage,
      description,
      ratingN,
      year,
      genre,
      userEmail: user.email,
      userName: user.displayName,
      userPhoto: user.photoURL,
    };

    fetch('http://localhost:5000/review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(review),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to add review.');
      })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Review added successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
        setTitle('');
        setCoverImage('');
        setDescription('');
        setRating(0);
        setYear('');
        setGenre('');
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
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgAddImage})`,
      }}
    >
      <div className="bg-black bg-opacity-75 shadow-2xl rounded-lg p-8 max-w-3xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-300">Share Your Game Review</h1>
          <p className="text-gray-300 mt-2">
            Help others by sharing your thoughts about your favorite games!
          </p>
        </div>
        <form onSubmit={handleAddReview} className="space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white">User Email</label>
              <input
                type="email"
                value={user?.email || ''}
                readOnly
                className="mt-2 w-full px-4 py-2 rounded-md bg-gray-700 text-gray-400 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">User Name</label>
              <input
                type="text"
                value={user?.displayName || ''}
                readOnly
                className="mt-2 w-full px-4 py-2 rounded-md bg-gray-700 text-gray-400 cursor-not-allowed"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white">Game Cover Image</label>
              <input
                type="text"
                placeholder="Enter cover image URL"
                className="mt-2 w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Game Title</label>
              <input
                type="text"
                placeholder="Enter game title"
                className="mt-2 w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Description</label>
            <textarea
              placeholder="Write your review"
              className="mt-2 w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-white">Year</label>
              <input
                type="number"
                placeholder="Release yearN"
                className="mt-2 w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
                value={yearN}
                onChange={(e) => setYear(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Genre</label>
              <select
                className="mt-2 w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
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
              <label className="block text-sm font-medium text-white">Rating</label>
              <div className="flex items-center space-x-1 mt-2">
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
                        className={`text-2xl ${
                          ratingValue <= (hover || rating)
                            ? 'text-yellow-400'
                            : 'text-gray-500'
                        } cursor-pointer`}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-purple-500 text-white font-semibold rounded-md shadow-lg hover:bg-purple-600 transition duration-300"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
