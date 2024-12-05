import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import signUpImg from '../../src/assets/form/sign-up-concept-illustration_114360-7965.avif'; 
import { toast } from 'react-toastify';

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;
    return hasUpperCase && hasLowerCase && hasMinLength;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      toast.error('Password must have at least 6 characters, including an uppercase and a lowercase letter.');
      return;
    }

    registerUser(email, password)
      .then(() => {
        navigate('/');
      })
      .catch((error) => console.error('Error during registration:', error));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#91572B]">Create an Account</h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#91572B] focus:border-[#91572B]"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#91572B] focus:border-[#91572B]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#91572B] focus:border-[#91572B]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">Photo URL</label>
            <input
              type="text"
              id="photoURL"
              name="photoURL"
              placeholder="Enter photo URL"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#91572B] focus:border-[#91572B]"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#91572B] text-white font-semibold rounded-md shadow-md hover:bg-[#7d4f20] transition duration-300 ease-in-out"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account? <Link to='/login' className="text-[#91572B] hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
      <img
        src={signUpImg}
        alt="Sign Up"
        className="hidden md:block w-1/2 h-auto rounded-lg shadow-lg ml-8"
      />
    </div>
  );
};

export default Register;
