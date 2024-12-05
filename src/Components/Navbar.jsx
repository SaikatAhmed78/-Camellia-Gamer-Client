import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../../src/assets/logo/deer-gaming-logo-vector-design_343694-1363.avif";
import {
  FaHome,
  FaListAlt,
  FaPlusCircle,
  FaUserCircle,
  FaSignInAlt,
  FaUserPlus,
  FaGamepad,
  FaStar,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    toast.success("You have logged out successfully!");
  };

  return (
    <nav className="bg-gradient-to-r from-purple-700 via-indigo-500 to-purple-700 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Chill Gamer Logo"
              className="h-12 w-12 rounded-full border-2 border-white shadow-md"
            />
            <span className="text-2xl font-extrabold text-white ml-3 tracking-wide">
              Chill <span className="text-yellow-300">Gamer</span>
            </span>
          </Link>
        </div>

        {/* Links for Desktop */}
        <div className="hidden lg:flex space-x-6">
          <Link to="/" className="text-white hover:text-yellow-300 flex items-center">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/allReviews" className="text-white hover:text-yellow-300 flex items-center">
            <FaListAlt className="mr-2" /> All Reviews
          </Link>
          {user ? (
            <>
              <Link
                to="/addReview"
                className="text-white hover:text-yellow-300 flex items-center"
              >
                <FaPlusCircle className="mr-2" /> Add Review
              </Link>
              <Link
                to="/myReviews"
                className="text-white hover:text-yellow-300 flex items-center"
              >
                <FaStar className="mr-2" /> My Reviews
              </Link>
              <Link
                to="/myWatchlist"
                className="text-white hover:text-yellow-300 flex items-center"
              >
                <FaGamepad className="mr-2" /> Game Watchlist
              </Link>
              <div className="dropdown dropdown-hover relative">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    className="h-10 w-10 rounded-full border-2 border-yellow-300 shadow-md"
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content absolute right-0 mt-2 p-2 bg-white shadow-md rounded-box w-44"
                >
                  <li>
                    <span className="text-gray-700 font-semibold">{user.displayName}</span>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="flex items-center text-gray-700 hover:text-red-500 mt-2"
                    >
                      <FaSignOutAlt className="mr-2" /> Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:text-yellow-300 flex items-center"
              >
                <FaSignInAlt className="mr-2" /> Login
              </Link>
              <Link
                to="/register"
                className="text-white hover:text-yellow-300 flex items-center"
              >
                <FaUserPlus className="mr-2" /> Register
              </Link>
            </>
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
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
              <li>
                <Link to="/" className="text-gray-700 hover:bg-gray-100 flex items-center">
                  <FaHome className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/allReviews"
                  className="text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <FaListAlt className="mr-2" /> All Reviews
                </Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link
                      to="/addReview"
                      className="text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <FaPlusCircle className="mr-2" /> Add Review
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/myReviews"
                      className="text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <FaStar className="mr-2" /> My Reviews
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/myWatchlist"
                      className="text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <FaGamepad className="mr-2" /> Game Watchlist
                    </Link>
                  </li>
                  <li className="flex items-center space-x-3">
                    <img
                      src={user.photoURL}
                      alt="User Avatar"
                      className="h-8 w-8 rounded-full border border-gray-300"
                    />
                    <span className="text-gray-700">{user.displayName}</span>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="flex items-center text-gray-700 hover:bg-gray-100"
                    >
                      <FaSignOutAlt className="mr-2" /> Log Out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <FaSignInAlt className="mr-2" /> Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <FaUserPlus className="mr-2" /> Register
                    </Link>
                  </li>
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
