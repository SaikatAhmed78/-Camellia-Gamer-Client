import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://chill-gamer-omega.vercel.app/reviews?email=${user.email}`
        );
        if (!response.ok) throw new Error("Failed to fetch reviews");
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        toast.error("Failed to load your reviews. Please try again.");
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchReviews();
    }
  }, [user]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`https://chill-gamer-omega.vercel.app/reviews/${id}`, {
            method: "DELETE",
          });
          if (!response.ok) throw new Error("Failed to delete review");
          setReviews(reviews.filter((review) => review._id !== id));
          Swal.fire("Deleted!", "Your review has been deleted.", "success");
        } catch (error) {
          Swal.fire(
            "Error!",
            "Failed to delete the review. Please try again.",
            "error"
          );
          console.error("Error:", error);
        }
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8  min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">
        My Reviews
      </h1>

      {loading ? (
        <Fade>
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="spinner border-t-4 border-blue-400 w-16 h-16 rounded-full animate-spin"></div>
            <p className="text-gray-400 mt-4">Loading your reviews...</p>
          </div>
        </Fade>
      ) : reviews.length === 0 ? (
        <div className="text-center text-gray-400">
          You have not written any reviews yet.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-800 text-gray-200">
                <th className="border border-gray-700 px-4 py-2">Game Title</th>
                <th className="border border-gray-700 px-4 py-2">Comment</th>
                <th className="border border-gray-700 px-4 py-2">Rating</th>
                <th className="border border-gray-700 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr
                  key={review._id}
                  className="hover:bg-gray-800 text-gray-300"
                >
                  <td className="border border-gray-700 px-4 py-2">
                    {review.title}
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    {review.description}
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    {review.ratingN}/10
                  </td>
                  <td className="border border-gray-700 px-4 py-2 text-center">
                    <div className="flex justify-center space-x-2">
                      <button
                        className="text-blue-400 hover:text-blue-500"
                        onClick={() => navigate(`/updateReview/${review._id}`)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-400 hover:text-red-500"
                        onClick={() => handleDelete(review._id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
