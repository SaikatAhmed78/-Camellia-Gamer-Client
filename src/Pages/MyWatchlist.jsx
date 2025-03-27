import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const MyWatchlist = () => {
  const { user } = useContext(AuthContext);
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await fetch(
          `https://chill-gamer-omega.vercel.app/watchlist/${user.email}`
        );
        if (!response.ok) throw new Error("Failed to fetch watchlist");
        const data = await response.json();
        setWatchlist(data);
      } catch (error) {
        toast.error("Failed to load watchlist. Please try again.");
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchWatchlist();
    }
  }, [user]);

  return (
    <div className="container mx-auto px-4 py-8 text-gray-800 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">My Watchlist</h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : watchlist.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-400">
          Your watchlist is empty.
        </div>
      ) : (
        <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="px-6 py-4 text-left">Game Title</th>
              <th className="px-6 py-4 text-left">Genre</th>
              <th className="px-6 py-4 text-left">Added On</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.map((item) => (
              <tr
                key={item._id}
                className="border-b hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4 font-medium">{item.title}</td>
                <td className="px-6 py-4">{item.genre || "N/A"}</td>
                <td className="px-6 py-4">
                  {item.addedOn
                    ? new Date(item.addedOn).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "Added recently"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyWatchlist;
