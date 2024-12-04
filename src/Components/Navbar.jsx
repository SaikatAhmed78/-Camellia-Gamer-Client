import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import logo from '../../src/assets/logo/deer-gaming-logo-vector-design_343694-1363.avif'; // Replace with your logo path
import { FaHome, FaListAlt, FaPlusCircle, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Chill Gamer Logo" className="h-10 w-10"/>
            <span className="text-xl font-bold text-white ml-2">Chill Gamer</span>
          </Link>
        </div>

        <div className="hidden lg:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300 flex items-center"><FaHome className="mr-1"/> Home</Link>
          <Link to="/reviews" className="text-white hover:text-gray-300 flex items-center"><FaListAlt className="mr-1"/> All Reviews</Link>
          {user ? (
            <>
              <Link to="/addReview" className="text-white hover:text-gray-300 flex items-center"><FaPlusCircle className="mr-1"/> Add Review</Link>
              <Link to="/myReviews" className="text-white hover:text-gray-300 flex items-center">My Reviews</Link>
              <Link to="/myWatchlist" className="text-white hover:text-gray-300 flex items-center">Game Watchlist</Link>
              <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <img src={user.photoURL} alt="User Avatar" className="h-10 w-10 rounded-full"/>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-white rounded-box w-40">
                  <li>
                    <a className="text-gray-800">{user.displayName}</a>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="text-gray-800 hover:text-red-500">
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
              <Link to="/register" className="text-white hover:text-gray-300">Register</Link>
            </>
          )}
        </div>

        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
            >
              <li><Link to="/" className="text-gray-700 hover:bg-gray-100 flex items-center"><FaHome className="mr-1"/> Home</Link></li>
              <li><Link to="/reviews" className="text-gray-700 hover:bg-gray-100 flex items-center"><FaListAlt className="mr-1"/> All Reviews</Link></li>
              {user ? (
                <>
                  <li><Link to="/addReview" className="text-gray-700 hover:bg-gray-100 flex items-center"><FaPlusCircle className="mr-1"/> Add Review</Link></li>
                  <li><Link to="/myReviews" className="text-gray-700 hover:bg-gray-100">My Reviews</Link></li>
                  <li><Link to="/myWatchlist" className="text-gray-700 hover:bg-gray-100">Game Watchlist</Link></li>
                  <li className="flex items-center space-x-3">
                    <img src={user.photoURL} alt="User Avatar" className="h-8 w-8 rounded-full"/>
                    <span className="text-gray-700">{user.displayName}</span>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-gray-700 hover:bg-gray-100">
                      Log Out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li><Link to="/login" className="text-gray-700 hover:bg-gray-100">Login</Link></li>
                  <li><Link to="/register" className="text-gray-700 hover:bg-gray-100">Register</Link></li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
