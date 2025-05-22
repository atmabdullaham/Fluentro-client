import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoryLogo from "../assets/category.png";
import arrowSign from "../assets/arrow.png";

const LanguageCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/category`);
        setCategories(res.data);
      } catch (err) {
        console.error("Failed to load stats:", err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className=" bg-white py-10 md:py-28">
      <div className="w-11/12 lg:w-10/12 mx-auto text-4xl font-bold ">
        <h2 className="mb-8 text-gray-600 text-center">
          Pick from {categories.length}+ Languages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((stat) => (
            <div className="card card-border w-full rounded-lg">
              <Link to={`/find-tutors?language=${stat}`} key={stat}>
                <div className="card-body bg-base-200">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img className="w-8 h-8" src={categoryLogo} alt="" />
                      <h2 className="card-title">
                        {stat.charAt(0).toUpperCase() + stat.slice(1)}
                      </h2>
                    </div>
                    <img className="w-8" src={arrowSign} alt="" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageCategory;
