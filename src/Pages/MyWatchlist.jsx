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
        const response = await fetch(`http://localhost:5000/watchlist?email=${user.email}`);
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

  const handleRemove = async (id) => {
    const confirmRemove = window.confirm("Are you sure you want to remove this game?");
    if (!confirmRemove) return;

    try {
      const response = await fetch(`http://localhost:5000/watchlist/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to remove game from watchlist");
      toast.success("Game removed from watchlist");
      setWatchlist(watchlist.filter((item) => item._id !== id));
    } catch (error) {
      toast.error("Failed to remove game. Please try again.");
      console.error("Error:", error);
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading your watchlist...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">My Watchlist</h1>
      {watchlist.length === 0 ? (
        <div className="text-center text-gray-500">Your watchlist is empty.</div>
      ) : (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-6 py-4 text-left">Game Title</th>
              <th className="px-6 py-4 text-left">Genre</th>
              <th className="px-6 py-4 text-left">Added On</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.map((item) => (
              <tr key={item._id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{item.gameTitle}</td>
                <td className="px-6 py-4">{item.genre || "N/A"}</td>
                <td className="px-6 py-4">{new Date(item.addedOn).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => handleRemove(item._id)}
                  >
                    Remove
                  </button>
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
