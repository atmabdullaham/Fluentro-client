import axios from "axios";
import { BookUser, Languages, LanguagesIcon, Star } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../providers/AuthContext";
import toast from "react-hot-toast";

const TutorDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { details } = useParams();
  const [tutor, setTutor] = useState([]);
  useEffect(() => {
    fetchTutorData();
  }, [details]);
  const fetchTutorData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/get-one/${details}`
    );

    setTutor(data);
  };
  console.log(tutor);

  const handleBooking = async () => {
    const bookingData = {
      tutor: {
        tutorId: tutor?._id,
        photo: tutor?.tutor?.photo,
        email: tutor?.tutor?.email,
        name: tutor?.tutor?.name,
      },
      language: tutor?.language,
      price: tutor?.price,
      learnerEmail: user?.email,
    };

    if (user?.email === tutor?.tutor?.email) {
      return toast.error("You cannot book your own tutorial");
    }
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/add-booking`,
        bookingData
      );
      toast.success("Tutor booked");

      navigate("/my-booked-tutors");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="bg-base-200 pt-10 pb-10">
      <div className="w-11/12 lg:w-10/12 mx-auto pb-4 text-xl font-bold ">
        <div className="card w-4xl mx-auto card-side bg-base-100 shadow-sm">
          <figure className="min-w-24 h-24 rounded-lg  m-4">
            <img className="rounded-lg" src={tutor?.tutor?.photo} alt="Tutor" />
          </figure>
          {/* Card body */}
          <div className="card-body">
            <div className="flex justify-between pb-4">
              <div>
                {tutor?.language && (
                  <h2 className="text-xl font-bold flex items-center">
                    {" "}
                    <Languages className="w-6 h-6 mr-1" />
                    {tutor?.language.charAt(0).toUpperCase() +
                      tutor?.language.slice(1)}
                  </h2>
                )}
                <span className="flex items-center text-lg text-base-content/70">
                  {tutor?.tutor?.name}
                </span>
                <p className="text-lg text-base-content/50 pt-6">
                  {tutor?.description}
                </p>
              </div>
              <div className="flex min-w-28 items-center flex-col">
                <span className="text-xl mb-2">${tutor?.price}/mo</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1  text-yellow-400" />
                  {tutor?.review || "No "} reviews
                </div>
              </div>
            </div>

            <div className="card-actions justify-end">
              <button
                onClick={handleBooking}
                className="btn border-red-200 border-2 bg-red-100 hover:bg-red-400 hover:border-red-400 hover:text-white"
              >
                <BookUser></BookUser> Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
