import axios from "axios";
import React, { useEffect, useState } from "react";
import TutorCard from "../components/TutorCard";

const FindTutors = () => {
  const [tutors, setTutors] = useState([]);
  useEffect(() => {
    fetchTutors();
  }, []);
  const fetchTutors = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/tutors`);
    setTutors(data);
  };
  console.log(tutors);
  return (
    <div className="bg-base-200 pt-10 pb-10">
      <div className="w-11/12 lg:w-10/12 mx-auto pb-4 text-xl font-bold ">
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
