import React from "react";
import { Languages, Star, DollarSign, Eye } from "lucide-react";
const TutorCard = ({ tutor }) => {
  return (
    <>
      <div className="card w-full bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-between pb-4">
            <img src={tutor?.tutor?.photo} alt="" />
            <div className="flex items-center flex-col">
              <span className="text-xl mb-2">${tutor?.price}/mo</span>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1  text-yellow-400" />
                {tutor?.review || "No "} reviews
              </div>
            </div>
          </div>

          <div className="pb-4 ">
            <h2 className="text-xl font-bold flex items-center">
              {" "}
              <Languages className="w-4 h-4 mr-1" />
              {tutor?.language.charAt(0).toUpperCase() +
                tutor?.language.slice(1)}
            </h2>
            <span className="flex items-center text-sm text-base-content/50">
              {tutor?.tutor?.name}
            </span>
          </div>
          <p className="text-sm text-base-content/50 ">
            {tutor?.description.length > 100
              ? tutor?.description.slice(0, 100) + "..."
              : tutor?.description}
          </p>
          <div className="mt-6">
            <button className="btn  border-red-100 border-2 hover:bg-red-400 hover:text-white btn-block">
              <Eye className="w-4 h-4 mr-1" />
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorCard;
