import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useTheme } from "../Provider/ThemeProvider";
import logo from "../../src/assets/logo/deer-gaming-logo-vector-design_343694-1363.avif";
import {
  FaHome,
  FaListAlt,
  FaPlusCircle,
  FaSignInAlt,
  FaUserPlus,
  FaGamepad,
  FaStar,
  FaSignOutAlt,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useTheme(); 

  const handleLogout = () => {
    logout();
    toast.success("You have logged out successfully!");
  };

  return (
    <nav className="bg-gradient-to-r from-black via-purple-800 to-black shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Chill Gamer Logo"
              className="h-12 w-12 rounded-full border-2 border-yellow-300 shadow-lg"
            />
            <span className="text-3xl font-extrabold text-yellow-300 ml-3 tracking-wide">
              Chill <span className="text-purple-400">Gamer</span>
            </span>
          </Link>
        </div>


        <div className="hidden lg:flex space-x-8 text-lg">
          <Link
            to="/"
            className="text-yellow-300 hover:text-purple-400 transition duration-300 flex items-center"
          >
            <FaHome className="mr-2" /> Home
          </Link>
          <Link
            to="/allReviews"
            className="text-yellow-300 hover:text-purple-400 transition duration-300 flex items-center"
          >
            <FaListAlt className="mr-2" /> All Reviews
          </Link>
          {user ? (
            <>
              <Link
                to="/addReview"
                className="text-yellow-300 hover:text-purple-400 transition duration-300 flex items-center"
              >
                <FaPlusCircle className="mr-2" /> Add Review
              </Link>
              <Link
                to="/myReviews"
                className="text-yellow-300 hover:text-purple-400 transition duration-300 flex items-center"
              >
                <FaStar className="mr-2" /> My Reviews
              </Link>
              <Link
                to="/myWatchlist"
                className="text-yellow-300 hover:text-purple-400 transition duration-300 flex items-center"
              >
                <FaGamepad className="mr-2" /> Watchlist
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
                  className="dropdown-content absolute right-0 mt-2 p-2 bg-gray-800 shadow-lg rounded-box w-44 text-white"
                >
                  <li>
                    <span className="font-semibold">{user.displayName}</span>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="flex items-center text-red-400 hover:text-red-500 mt-2"
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
                className="text-yellow-300 hover:text-purple-400 transition duration-300 flex items-center"
              >
                <FaSignInAlt className="mr-2" /> Login
              </Link>
              <Link
                to="/register"
                className="text-yellow-300 hover:text-purple-400 transition duration-300 flex items-center"
              >
                <FaUserPlus className="mr-2" /> Register
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center space-x-4">
    
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border-2 border-gray-500 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 flex items-center justify-center"
          >
            {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>

       
          <div className="lg:hidden">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-300"
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
                className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-gray-800 text-white rounded-box w-52"
              >
                <li>
                  <Link to="/" className="hover:bg-gray-700 flex items-center">
                    <FaHome className="mr-2" /> Home
                  </Link>
                </li>
                <li>
                  <Link to="/allReviews" className="hover:bg-gray-700 flex items-center">
                    <FaListAlt className="mr-2" /> All Reviews
                  </Link>
                </li>
                {user ? (
                  <>
                    <li>
                      <Link to="/addReview" className="hover:bg-gray-700 flex items-center">
                        <FaPlusCircle className="mr-2" /> Add Review
                      </Link>
                    </li>
                    <li>
                      <Link to="/myReviews" className="hover:bg-gray-700 flex items-center">
                        <FaStar className="mr-2" /> My Reviews
                      </Link>
                    </li>
                    <li>
                      <Link to="/myWatchlist" className="hover:bg-gray-700 flex items-center">
                        <FaGamepad className="mr-2" /> Watchlist
                      </Link>
                    </li>
                    <li className="flex items-center space-x-3">
                      <img
                        src={user.photoURL}
                        alt="User Avatar"
                        className="h-8 w-8 rounded-full border border-yellow-300"
                      />
                      <span>{user.displayName}</span>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="flex items-center text-red-400 hover:text-red-500"
                      >
                        <FaSignOutAlt className="mr-2" /> Log Out
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/login" className="hover:bg-gray-700 flex items-center">
                        <FaSignInAlt className="mr-2" /> Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" className="hover:bg-gray-700 flex items-center">
                        <FaUserPlus className="mr-2" /> Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
