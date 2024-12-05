import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import signInImg from '../../src/assets/form/login-concept-illustration_114360-739.avif'; 
import Swal from 'sweetalert2';

const SignIn = () => {
  const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    signInUser(email, password)
      .then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Login successful!',
            showConfirmButton: false,
            timer: 1500
        });
        navigate('/'); 
      })
      .catch((error) => {
        console.error('Error during login:', error);
        Swal.fire({
            icon: 'error',
            title: 'Login failed!',
            text: 'Please check your credentials and try again.',
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Google login successful!',
            showConfirmButton: false,
            timer: 1500
        });
        navigate('/');
      })
      .catch((error) => {
        console.error('Error during Google login:', error);
        Swal.fire({
            icon: 'error',
            title: 'Google login failed!',
            text: 'Please try again.',
        });
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then(() => {
        Swal.fire({
            icon: 'success',
            title: 'GitHub login successful!',
            showConfirmButton: false,
            timer: 1500
        });
        navigate('/');
      })
      .catch((error) => {
        console.error('Error during GitHub login:', error);
        Swal.fire({
            icon: 'error',
            title: 'GitHub login failed!',
            text: 'Please try again.',
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#91572B]">Sign In to Your Account</h2>
        <form onSubmit={handleSignIn} className="space-y-6">
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
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#91572B] text-white font-semibold rounded-md shadow-md hover:bg-[#7d4f20] transition duration-300 ease-in-out"
          >
            Sign In
          </button>
        </form>
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center w-full py-2 px-4 mr-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            <FaGoogle className="mr-2" /> Sign in with Google
          </button>
          <button
            onClick={handleGithubSignIn}
            className="flex items-center justify-center w-full py-2 px-4 ml-2 bg-gray-800 text-white font-semibold rounded-md shadow-md hover:bg-gray-900 transition duration-300 ease-in-out"
          >
            <FaGithub className="mr-2" /> Sign in with GitHub
          </button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account? <Link to='/register' className="text-[#91572B] hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
      <img
        src={signInImg}
        alt="Sign In"
        className="hidden md:block w-1/2 h-auto rounded-lg shadow-lg ml-8"
      />
    </div>
  );
};

export default SignIn;
