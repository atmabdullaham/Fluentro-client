import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../providers/AuthContext";
import axios from "axios";
import reviewIcon from "../assets/review.png";
import toast from "react-hot-toast";

const MyBookedTutors = () => {
  const { user } = useContext(AuthContext);
  const [bookedTutors, setBookedTutors] = useState([]);
  useEffect(() => {
    fetchMyBookedTutors();
  }, [user]);
  const fetchMyBookedTutors = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/my-booked-tutors/${user?.email}`
    );
    setBookedTutors(data);
  };
  console.log(bookedTutors);
  const handleReview = async (tutorId) => {
    console.log(tutorId);
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/update-review/${tutorId}`
      );
      toast.success("review added");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div className="bg-base-200 pt-10 pb-10">
      <div className="lg:w-10/12 mx-auto pb-4 text-xl font-bold">
        My Booked Tutors:{" "}
        <span className="bg-red-50 p-1 rounded-full">
          {bookedTutors.length}
        </span>
      </div>
      <div className="bg-red-50 lg:w-10/12 mx-auto rounded-lg">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="border-b-4  border-base-200 bg-red-100">
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Language</th>
                <th>Price</th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bookedTutors.map((bookedTutor) => (
                <tr key={bookedTutor._id} bookedTutor={bookedTutor}>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={bookedTutor?.tutor?.photo}
                          alt="Photo of the tutor"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{bookedTutor?.tutor?.name}</td>
                  <td>
                    <p
                      className={` 
${bookedTutor?.language === "bangla" && "text-red-500 "}
${bookedTutor?.language === "english" && "text-blue-500 "}
${bookedTutor?.language === "hindi" && "text-orange-500 "}
${bookedTutor?.language === "spanish" && "text-yellow-600 "}
${bookedTutor?.language === "arabic" && "text-green-600 "}
${bookedTutor?.language === "french" && "text-purple-500 "}
${bookedTutor?.language === "chinese" && "text-rose-500 "}
${bookedTutor?.language === "urdu" && "text-emerald-600 "}
${bookedTutor?.language === "portuguese" && "text-pink-600 "}
${bookedTutor?.language === "russian" && "text-indigo-700 "}
${bookedTutor?.language === "japanese" && "text-fuchsia-600 "}
${bookedTutor?.language === "german" && "text-lime-600 "}
${bookedTutor?.language === "korean" && "text-cyan-600 "}
${bookedTutor?.language === "turkish" && "text-teal-600 "}
${bookedTutor?.language === "italian" && "text-sky-600 "}
`}
                    >
                      {bookedTutor?.language}
                    </p>
                  </td>
                  <td>${bookedTutor?.price}</td>

                  <th>
                    <div className="flex  items-center gap-2">
                      <button
                        onClick={() => {
                          handleReview(bookedTutor?.tutor?.tutorId);
                        }}
                        className="btn bg-transparent border-0 hover:bg-transparent rounded-full m-0 p-0"
                      >
                        <img className="w-4" src={reviewIcon} alt="" />
                        Review
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookedTutors;
