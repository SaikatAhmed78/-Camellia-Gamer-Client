import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/reviews?email=${user.email}`
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
          const response = await fetch(`http://localhost:5000/reviews/${id}`, {
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
    <div className="container mx-auto px-4 py-8 bg-gray-900 text-gray-200 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6 text-white">
        My Reviews
      </h1>
      {reviews.length === 0 ? (
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
                    {review.rating}/5
                  </td>
                  <td className="border border-gray-700 px-4 py-2 text-center">
                    <div className="flex justify-center space-x-2">
                      <button
                        className="text-blue-400 hover:text-blue-500"
                        onClick={() =>
                          navigate(`/updateReview/${review._id}`)
                        }
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