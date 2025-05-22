import axios from "axios";
import React, { useEffect, useState } from "react";
import TutorCard from "../components/TutorCard";
import toast from "react-hot-toast";

const FindTutors = () => {
  useEffect(() => {
    document.title = "Find Tutors | Fluentro";
  }, []);
  const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState("");

  const searchParams = new URLSearchParams(location.search);
  const language = searchParams.get("language");

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/find-tutors?language=${
            language || ""
          }&search=${search || ""}`
        );
        setTutors(res.data);
      } catch (err) {
        toast.error(err);
      }
    };
    fetchTutors();
  }, [language, search]);

  return (
    <div className="bg-base-200 pt-10 pb-10">
      <div className="w-11/12 lg:w-10/12 mx-auto pb-4 text-xl font-bold ">
        <div className="flex justify-center">
          <div className="flex  overflow-hidden rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-600 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent focus:outline-1 "
              type="text"
              name="search"
              onBlur={(e) => setSearch(e.target.value)}
              placeholder="Enter Language"
              aria-label="Enter Language"
            />

            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-red-400 rounded-md hover:bg-red-500 focus:bg-red-600 focus:outline-none ">
              Search
            </button>
          </div>
        </div>
        Tutors: {tutors.length}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {tutors.map((tutor) => (
            <TutorCard key={tutor._id} tutor={tutor}></TutorCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindTutors;
