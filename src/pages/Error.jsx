import React from "react";
import error from "../assets/error.jpg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-base-200 pt-10 pb-10">
      <div className="w-11/12 lg:w-10/12 mx-auto pb-4 text-xl font-bold flex flex-col-reverse md:flex-row gap-4">
        <div className="md:w-1/2 flex flex-col items-center justify-center gap-8">
          <h2 className="text-4xl">Error</h2>
          <Link to="/" className="btn bg-red-400 text-white">
            Back Home
          </Link>
        </div>
        <div className="md:w-1/2">
          <img src={error} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Error;
